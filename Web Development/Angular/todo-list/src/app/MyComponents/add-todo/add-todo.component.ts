import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToDo } from 'src/app/todo'

@Component({
	selector: 'app-add-todo',
	templateUrl: './add-todo.component.html',
	styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
	@Output() todoAdd: EventEmitter<ToDo> = new EventEmitter();
	title: string;
	desc: string;
	constructor() { }

	ngOnInit(): void {
	}

	onSubmit() {
		const todo = {
			name: this.title,
			desc: this.desc,
			active: true,
			checked: false
		}

		this.todoAdd.emit(todo);
	}
}
