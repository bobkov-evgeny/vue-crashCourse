"use strict";

/*
const App = {
	data() {
		return {
			counter: 0,
			title: "Список заметок",
			placeholderString: "Введите заметку",
			inputValue: "",
			notes: ["Заметка 1", "Заметка 2"],
		};
	},

	methods: {
		addNewNote() {
			console.log(this.inputValue);
			if (!this.inputValue) return;
			this.notes.push(this.inputValue);
			this.inputValue = "";
		},
		toUpperCase(item) {
			return item.toUpperCase();
		},
		deleteNote(index) {
			this.notes.splice(index, 1);
		},
	},

	computed: {
		doubleCountComputed() {
			return this.notes.length * 2;
		},
	},

	watch: {
		inputValue(value) {
			if (value.length > 20) {
				this.inputValue = "";
			}
		},
	},
};

Vue.createApp(App).mount("#app");
*/

Vue.createApp({
	data: () => ({
		title: "Я есть Грут",
		myHtml: "<h1>Vue 3 App</h1>",
		person: {
			firstName: "Eugene",
			lastName: "Bobkov",
			age: 25,
		},
		items: [1, 2, 3],
	}),
	methods: {
		addItem() {
			this.items.unshift(this.$refs.myInput.value);
		},
	},
	computed: {
		evenItems() {
			return this.items.filter((item) => item % 2 === 0);
		},
	},
}).mount("#app");
