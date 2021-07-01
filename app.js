"use strict";

const App = {
	data() {
		return {
			counter: 0,
			title: "Список заметок",
			placeholderString: "Введите заметку",
			inputValue: "",
			notes: [],
		};
	},
	methods: {
		addInput(e) {
			this.inputValue = e.target.value;
		},
		addNewNote() {
			this.notes.push(this.inputValue);
			this.inputValue = "";
		},
		deleteNote(index) {
			this.notes.splice(index, 1);
		},
	},
};

Vue.createApp(App).mount("#app");
