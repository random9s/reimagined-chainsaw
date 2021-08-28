const keyboardTemplate = document.createElement('template');
keyboardTemplate.innerHTML = `
	<style>
		.message-input {
			width:100%;
			position: relative;
			background-color: #F7F7F7;
		}
		.message-input div { display: inline; }
		.message-input textarea {
			width: 90%;
			margin: 5px;
			padding: 8px;
			height: 15px;
			margin-left: 4%;
			resize: vertical;
			overflow: visible;
			border-radius: 15px;
			caret-color: #007EFF;
			border: 1px solid #EBEBEB;
		}
		.message-input .send-btn {
			color: white;
			margin-top: 6px;
			margin-left: 90%;
			position: absolute;
			padding: 20px;
			background-size: 30px;
			background-repeat: no-repeat;
			background-image: url('assets/icon/send.svg')
		}
		.keyboard {padding: 5px; padding-top: 15px;}
		.message-input textarea:focus {outline: none;}
		.key-top{margin-left: 15px;}
		.key-mid-top {margin-left: 40px; margin-top: 30px;}
		.key-mid-bot {margin-left: 15px; margin-top: 30px;}
		.key-bot {margin-left: 15px;margin-top: 30px;}
	</style>
`;

class Keyboard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({mode: 'open'});
		this.shadowRoot.appendChild(keyboardTemplate.content.cloneNode(true));
	}

	connectedCallback() {
		let self = this;

		const textArea = EL('textarea', { placeholder: 'iMessage', disabled: true })
		const sendButton = EL('div', {
			classList: ['send-btn'],
			events: { click: e => {
				self.dispatchEvent(new CustomEvent('message', {
					detail: {value: textArea.innerHTML},
					bubbles: true,
				}));
				textArea.innerHTML = '';
			}}
		});

		const keyboard = EL('div', { classList: ['keyboard'] })
		while (this.firstChild) {
			keyboard.appendChild(this.firstChild);
		}
		const keys = keyboard.getElementsByTagName('key-button');
		const messageInput = EL('div', { classList: ['message-input'], children: [
			sendButton,
			EL('div', {children: [textArea]})
		]});


		this.container = EL('div', { events: {
			'keybutton-click': e => { textArea.innerHTML += e.detail.value },
			'actionkey-click': e => {
				let action = e.detail.value;
				let msg = textArea.innerHTML;
				switch(action) {
					case 'ctrl':
						for (let i=0; i < keys.length; i++)
							keys[i].dispatchEvent(new CustomEvent('ctrl-click'));
						break;
					case 'num':
						for (let i=0; i < keys.length; i++)
							keys[i].dispatchEvent(new CustomEvent('num-click'));
						break;
					case 'back':
						msg = msg.slice(0, -1);
						break;
					case 'space':
						msg += ' ';
						break;
					case 'return':
						msg += "\n";
						break;
				}
				textArea.innerHTML = msg;
			}
		}, children: [messageInput, keyboard]});
		this.shadowRoot.appendChild(this.container);
	}
}
customElements.define('key-board', Keyboard);


const keyButtonTemplate = document.createElement('template');
keyButtonTemplate.innerHTML = `
  <style>
	.key-btn{
		padding: 10px;
		cursor: pointer;
		text-align: center;
		border-radius: 8px;
		background-color:white;
		box-shadow: 0 2px 4px rgba(0,0,0,0.15);
	}
	.ctrl-btn {
		margin-right: 14px;
		padding-right: 25px;
		background-size: 30px;
		background-position: center;
		background-repeat: no-repeat;
		background-image: url('../icon/arrow-up.png');
	}
	.back-btn {
		margin-left: 14px;
		padding-left: 25px;
		padding-right: 25px;
		background-size: 30px;
		background-position: center;
		background-repeat: no-repeat;
		background-image: url('../icon/backspace.png');
	}
	.grey-btn {background-color: #ACB5BC;}
	.aux-btn {padding-left: 20px; padding-right: 20px;}
	.space-btn {padding-left: 80px; padding-right: 80px; }
  </style>`;


class KeyButton extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({mode: 'open'});
		this.shadowRoot.appendChild(keyButtonTemplate.content.cloneNode(true));
	}

	connectedCallback() {
		this.key = document.createElement('span');
		this.shadowRoot.appendChild(this.key);

		this.style.display='inline-block';
		if (this.attributes.action) {
			switch (this.attributes.action.value) {
				case 'ctrl':
					this.key.classList.add('ctrl-btn');
					break;
				case 'back':
					this.key.classList.add('back-btn', 'grey-btn');
					break;
				case 'num':
					this.key.classList.add('aux-btn', 'grey-btn');
					break;
				case 'space':
					this.key.classList.add('space-btn');
					break;
				case 'return':
					this.key.classList.add('aux-btn','grey-btn');
					break;
			}
		}
		this.key.classList.add('key-btn');
		this.addEventListener('click', this.__onClick);
		this.addEventListener('ctrl-click', this.__ctrlClick);
		this.addEventListener('num-click', this.__numClick);
		this.__changeInnerHTML('up');
	}

	disconnectedCallback() {
		this.removeEventListener('click', this.__onClick);
		this.removeEventListener('ctrl-click', this.__ctrlClick);
		this.removeEventListener('num-click', this.__numClick);
	}

	__ctrlClick(event) {
		if (this.currentKey == 'up') this.__changeInnerHTML('low');
		else if (this.currentKey == 'low') this.__changeInnerHTML('up');
		else if (this.currentKey == 'num') this.__changeInnerHTML('alt');
		else if (this.currentKey == 'alt') this.__changeInnerHTML('num');
	}

	__numClick(event) {
		if (this.currentKey == 'up' || this.currentKey == 'low')
			this.__changeInnerHTML('num');
		else
			this.__changeInnerHTML('up');
	}

	__changeInnerHTML(key) {
		if (this.attributes[key]) {
			if (this.attributes[key].value == "") {
				this.key.style.visibility="hidden";
			} else {
			this.key.style.visibility="visible";
				this.key.innerHTML = this.attributes[key].value;
			}
			this.currentKey = key;
		}
	}

	__onClick(event) {
		if (this.attributes.action) {
			this.dispatchEvent(new CustomEvent('actionkey-click', {
				detail: {value: this.attributes.action.value},
				bubbles: true,
			}));
			return;
		}

		this.dispatchEvent(new CustomEvent('keybutton-click', {
			detail: {value: this.key.innerHTML},
			bubbles: true,
		}));
	}
}
customElements.define('key-button', KeyButton);
