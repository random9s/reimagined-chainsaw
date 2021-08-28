const messageContainerTemplate = document.createElement('template');
messageContainerTemplate.innerHTML = `
	<style>
	.container {
		width: 25em;
		height: 46em;
		margin: 0 auto;
		border: 2px solid #E5E4EA;
		background-color: #E5E4EA;
	}
	.header{
		padding: 5px;
		height: 60px;
		content: ' ';
		position: relative;
		box-shadow: 0 2px 4px rgba(0,0,0,0.15);
	}
	.phone-info {padding: 5px;}
	.phone-info span {
		margin: 5px;
		display: inline;
		font-size: 14px;
	}
	.message-info {padding: 5px;}
	.phone-info .time {margin: 26%;}
	.phone-info .battery {margin-left: 10px;}
	.message-info span {
		margin: 5px;
		display: inline;
		font-size: 14px;
	}
	.message-info .messages {
		padding-left: 20px;
		padding-right: 20px;
		background-size: 18px;
		background-repeat: no-repeat;
		background-image: url('../icon/back.svg')
	}
	.message-info .recipient {
		margin: 28%;
		font-size: 18px;
		font-weight: bold;
	}
	.message-container{
		padding: 5px;
		height: 56%;
		overflow: scroll;
		background-color: white;
	}
	</style>
`;

class MessageContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({mode: 'open'});
		this.shadowRoot.appendChild(messageContainerTemplate.content.cloneNode(true));
	}

	connectedCallback() {
		function getTime() {
			const today = new Date();
			let hours = today.getHours();
			let min = today.getMinutes();
			if (min < 10) min = '0'+min;
			let period = 'AM';
			if (hours > 12) {
				hours -= 12
				period='PM';
			}
			return `${hours}:${min} ${period}`;
		}

		const header = EL('div', { classList: ['header'], children: [
			EL('div', {classList:['phone-info'], children: [
				EL('span', {classList: ['carrier'], innerHTML: 'AT&T LTE'}),
				EL('span', {classList: ['time'], innerHTML: getTime()}),
				EL('span', {classList: ['battery'], innerHTML: '86%'}),
			]}),
			EL('div', { classList: ['message-info'], children: [
				EL('span', {classList: ['messages']}),
				EL('span', {classList: ['recipient'], innerHTML: 'Stranger'})
			]})
		]});
		const messageboard = EL('div', { classList: ['message-container'] });

		let self = this;
		self.messageList = [];
		self.container = EL('div', { classList: ['container'], events: {
			message: e => {
				self.messageList.push({msg: e.detail.value});
				while(messageboard.firstChild) messageboard.removeChild(messageboard.firstChild);
				for (let i = 0; i < self.messageList.length; i++) {
					var msgElem = document.createElement('div', { is: 'text-bubble' });
					msgElem.message = self.messageList[i].msg;
					msgElem.sender = 'self';
					messageboard.append(msgElem);
				}
				messageboard.scrollTop = messageboard.scrollHeight;
			}
		}, children: [header, messageboard]});
		while (this.firstChild) {
			self.container.appendChild(this.firstChild);
		}
		this.shadowRoot.appendChild(self.container);

		this.shadowRoot.addEventListener('message', this);
	}
}
customElements.define('message-container', MessageContainer);
