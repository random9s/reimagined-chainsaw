const bubbleTemplate = document.createElement('template');
bubbleTemplate.innerHTML = `
	<style>
		.bubble {
			width: fit-content;
			height: fit-content;
			padding: 10px;
			max-width: 50%;
			font-size: 14px;
			border-radius: 18px;
			white-space: pre-line;
			box-shadow: 0 2px 4px rgba(0,0,0,0.15);
			word-wrap: break-word;
		}
		.bubble-right{float: right;}
		.txt-white {color: #FFFFFF;}
		.txt-lgt-blue{color: #59B0DB;}
		.bg-grey {background-color: #E5E4EA;}
		.bg-blue {background-color: #007EFF;}
	</style>
`;
class TextBubble extends HTMLDivElement {
	constructor() {
		super();
		this.attachShadow({mode: 'open'});
		this.shadowRoot.appendChild(bubbleTemplate.content.cloneNode(true));
	}

	connectedCallback() {
        this.bubble = document.createElement ('div');
		this.shadowRoot.appendChild(this.bubble);
		if (this.attributes.sender.value == 'self') {
			this.bubble.classList.add('bg-blue', 'bubble-right', 'txt-white');
		} else {
			this.bubble.classList.add('bg-grey');
		}
		this.bubble.innerHTML = this.attributes.message.value;

		this.style.width = '100%';
		this.style.display = 'inline-block';
		this.bubble.classList.add('bubble');
	}

	set message(msg) {
		this.setAttribute('message', msg);
	}

	get message() {
		return this.hasAttribute('message');
	}

	set sender(sender) {
		this.setAttribute('sender', sender);
	}

	get sender() {
		return this.hasAttribute('sender');
	}
}
customElements.define('text-bubble', TextBubble, { extends: 'div' });
