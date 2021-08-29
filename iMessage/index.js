const Speech = {
	greeting: ["Hello!", "How are you?", "It's good to see you"],
	pronoun: ["I","you","he","they","we","she","them","him","her","something","nothing","anything","himself","everything","someone","themselves","everyone","itself","anyone","myself"],
	adjective: ["other",
"new",
"good",
"high",
"old",
"great",
"big",
"American",
"small",
"large",
"national",
"young",
"different",
"black",
"long",
"little",
"important",
"political",
"bad",
"white",
"real",
"best",
"right",
"social",
"only",
"public",
"sure",
"low",
"early",
"able",
"human",
"local",
"late",
"hard",
"major",
"better",
"economic",
"strong",
"possible",
"whole",
"free",
"military",
"true",
"federal",
"international",
"full",
"special",
"easy",
"clear",
"recent",
"certain",
"personal",
"open",
"red",
"difficult",
"available",
"likely",
"short",
"single",
"medical",
"current",
"wrong",
"private",
"past",
"foreign",
"fine",
"common",
"poor",
"natural",
"significant",
"similar",
"hot",
"dead",
"central",
"happy",
"serious",
"ready",
"simple",
"left",
"physical",
"general",
"environmental",
"financial",
"blue",
"democratic",
"dark",
"various",
"entire",
"close",
"legal",
"religious",
"cold",
"final",
"main",
"green",
"nice",
"huge",
"popular",
"traditional",
"cultural"],
	verb: ["be",
"have",
"do",
"say",
"go",
"can",
"get",
"would",
"make",
"know",
"will",
"think",
"take",
"see",
"come",
"could",
"want",
"look",
"use",
"find",
"give",
"tell",
"work",
"may",
"should",
"call",
"try",
"ask",
"need",
"feel",
"become",
"leave",
"put",
"mean",
"keep",
"let",
"begin",
"seem",
"help",
"talk",
"turn",
"start",
"might",
"show",
"hear",
"play",
"run",
"move",
"like",
"live",
"believe",
"hold",
"bring",
"happen",
"must",
"write",
"provide",
"sit",
"stand",
"lose",
"pay",
"meet",
"include",
"continue",
"set",
"learn",
"change",
"lead",
"understand",
"watch",
"follow",
"stop",
"create",
"speak",
"read",
"allow",
"add",
"spend",
"grow",
"open",
"walk",
"win",
"offer",
"remember",
"love",
"consider",
"appear",
"buy",
"wait",
"serve",
"die",
"send",
"expect",
"build",
"stay",
"fall",
"cut",
"reach",
"kill",
"remain"],
	noun: ["time",
"year",
"people",
"way",
"day",
"man",
"thing",
"woman",
"life",
"child",
"world",
"school",
"state",
"family",
"student",
"group",
"country",
"problem",
"hand",
"part",
"place",
"case",
"week",
"company",
"system",
"program",
"question",
"work",
"government",
"number",
"night",
"point",
"home",
"water",
"room",
"mother",
"area",
"money",
"story",
"fact",
"month",
"lot",
"right",
"study",
"book",
"eye",
"job",
"word",
"business",
"issue",
"side",
"kind",
"head",
"house",
"service",
"friend",
"father",
"power",
"hour",
"game",
"line",
"end",
"member",
"law",
"car",
"city",
"community",
"name",
"president",
"team",
"minute",
"idea",
"kid",
"body",
"information",
"back",
"parent",
"face",
"others",
"level",
"office",
"door",
"health",
"person",
"art",
"war",
"history",
"party",
"result",
"change",
"morning",
"reason",
"research",
"girl",
"guy",
"moment",
"air",
"teacher",
"force",
"education"],
 adverb: ["up",
"so",
"out",
"just",
"now",
"how",
"then",
"more",
"also",
"here",
"well",
"only",
"very",
"even",
"back",
"there",
"down",
"still",
"in",
"as",
"to",
"when",
"never",
"really",
"most",
"on",
"why",
"about",
"over",
"again",
"where",
"right",
"off",
"always",
"today",
"all",
"far",
"long",
"away",
"yet",
"often",
"ever",
"however",
"almost",
"later",
"much",
"once",
"least",
"ago",
"together",
"around",
"already",
"enough",
"both",
"maybe",
"actually",
"probably",
"home",
"of course",
"perhaps",
"little",
"else",
"sometimes",
"finally",
"less",
"better",
"early",
"especially",
"either",
"quite",
"simply",
"nearly",
"soon",
"certainly",
"quickly",
"no",
"recently",
"before",
"usually",
"thus",
"exactly",
"hard",
"particularly",
"pretty",
"forward",
"ok",
"clearly",
"indeed",
"rather",
"that",
"tonight",
"close",
"suddenly",
"best",
"instead",
"ahead",
"fast",
"alone",
"eventually",
"directly"],
	structures: [
	"subject-verb",
	"subject-verb-object",
	"subject-verb-adjective",
	"subject-verb-adverb",
	"subject-verb-noun",
	]
};

window.onload = function() {
	function randInt(max) {
		return Math.floor(Math.random()*max);
	}
	function randDuration(min, max) {
		let rand = Math.floor(Math.random() * (max - min + 1) + min);
		return rand*1000;
	}
	function randomSentence() {
		let structure = Speech.structures[randInt(Speech.structures.length)].split('-');
		let msg = '';
		for (let i = 0; i < structure.length; i++) {
			switch(structure[i]) {
				case 'verb':
					msg += Speech.verb[randInt(Speech.verb.length)];
					break;
				case 'adjective':
					msg += Speech.adjective[randInt(Speech.adjective.length)];
					break;
				case 'adverb':
					msg += Speech.adverb[randInt(Speech.adverb.length)];
					break;
				case 'subject':
					msg += Speech.pronoun[randInt(Speech.pronoun.length)];
					msg += ' ';
					msg += Speech.noun[randInt(Speech.noun.length)];
					break;
				case 'object':
				case 'noun':
					msg += Speech.noun[randInt(Speech.noun.length)];
					break;
			}
			msg += ' ';
		}
		return msg;
	}
	const msg = document.getElementById('messages').shadowRoot.children[1];
	msg.dispatchEvent(new CustomEvent('message', {
		detail: {value: Speech.greeting[randInt(Speech.greeting.length)]},
	}));
	function sendMessage() {
		msg.dispatchEvent(new CustomEvent('message', {
			detail: {value: randomSentence()},
		}));
		setTimeout(sendMessage, randDuration(10, 15));
	};
	setTimeout(sendMessage, randDuration(10, 15));
};

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
		background-image: url('https://jakeparham.com/projects/iMessage/assets/icons/back.svg')
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
				self.messageList.push({msg: e.detail.value, sender: e.detail.sender});

				while(messageboard.firstChild) messageboard.removeChild(messageboard.firstChild);
				for (let i = 0; i < self.messageList.length; i++) {
					var msgElem = document.createElement('div', { is: 'text-bubble' });
					msgElem.message = self.messageList[i].msg;
					msgElem.sender = self.messageList[i].sender;
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
			background-image: url('https://jakeparham.com/projects/iMessage/assets/icons/send.svg')
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
				if (textArea.innerHTML == '') return;
				self.dispatchEvent(new CustomEvent('message', {
					detail: {value: textArea.innerHTML, sender: 'self'},
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
			'keybutton-click': e => {
				textArea.innerHTML += e.detail.value
				if (e.detail.value == e.detail.value.toUpperCase()) {
					for (let i=0; i < keys.length; i++)
						keys[i].dispatchEvent(new CustomEvent('ctrl-click'));
				}
			},
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
		background-image: url('https://jakeparham.com/projects/iMessage/assets/icons/arrow-up.png');
	}
	.back-btn {
		margin-left: 14px;
		padding-left: 25px;
		padding-right: 25px;
		background-size: 30px;
		background-position: center;
		background-repeat: no-repeat;
		background-image: url('https://jakeparham.com/projects/iMessage/assets/icons/backspace.png');
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
const bubbleTemplate = document.createElement('template');
bubbleTemplate.innerHTML = `
	<style>
		.bubble {
			width: fit-content;
			height: fit-content;
			margin: 2px;
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
