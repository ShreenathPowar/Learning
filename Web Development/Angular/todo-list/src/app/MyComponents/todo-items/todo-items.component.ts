import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from 'src/app/todo';

@Component({
	selector: 'app-todo-items',
	templateUrl: './todo-items.component.html',
	styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
	@Input() todo: ToDo;
	@Input() index: number;
	@Output() deleteToDo: EventEmitter<ToDo> = new EventEmitter();
	@Output() markTodo: EventEmitter<ToDo> = new EventEmitter();
	@Output() checkTodo: EventEmitter<ToDo> = new EventEmitter();
	constructor() {
	}

	ngOnInit(): void {
	}
	onClick(todo: ToDo) {
		console.log('onclick triggered!');
		this.deleteToDo.emit(todo);
	}

	onSubmit(todo: ToDo) {
		this.markTodo.emit(todo);
	}

	showHideSubmit(todo: ToDo) {
		this.checkTodo.emit(todo);
	}
}
