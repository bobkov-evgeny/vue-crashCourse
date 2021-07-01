"use strict";

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
