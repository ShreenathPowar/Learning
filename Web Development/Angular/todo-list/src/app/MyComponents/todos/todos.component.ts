import { Component, OnInit } from '@angular/core';
import { ToDo } from "src/app/todo";

@Component({
	selector: 'app-todos',
	templateUrl: './todos.component.html',
	styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
	todos: ToDo[];
	localItems: string;
	constructor() {
		this.localItems = localStorage.getItem('todos');
		if(this.localItems == null) {
			this.todos = [];
		}

		else {
			this.todos = JSON.parse(this.localItems);
		}
	}

	ngOnInit(): void {
	}

	todoDelete(todo: ToDo) {
		const index = this.todos.indexOf(todo);
		this.todos.splice(index, 1);
		localStorage.setItem('todos', JSON.stringify(this.todos));
	}

	addtodo(todo: ToDo) {
		this.todos.push(todo);
		localStorage.setItem('todos', JSON.stringify(this.todos));
	}

	markasDone(todo: ToDo) {
		const index = this.todos.indexOf(todo);
		this.todos[index].active = false;
		localStorage.setItem('todos', JSON.stringify(this.todos));
	}

	todoChecked(todo: ToDo) {
		const index = this.todos.indexOf(todo);
		this.todos[index].checked = !this.todos[index].checked;
		localStorage.setItem('todos', JSON.stringify(this.todos));
	}
}
