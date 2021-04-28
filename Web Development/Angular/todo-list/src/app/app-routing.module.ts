import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponents/todos/todos.component';

const routes: Routes = [
	{ path: '', component: TodosComponent },
	{ path: 'add', component: TodosComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
