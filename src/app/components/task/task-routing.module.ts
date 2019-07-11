import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {AuthGuard} from "../../shared/services/auth.guard";
import {TaskComponent} from "./task.component";
import {TaskEditComponent} from "./task-edit/task-edit.component";
import {TaskListComponent} from "./task-list/task-list.component";
import {TaskViewComponent} from "./task-view/task-view.component";
import {TaskAddComponent} from "./task-add/task-add.component";


const routes: Routes = [
	{ path: 'tasks', component: TaskComponent, children:
		[
			{
				path: '', component: TaskListComponent
			},
			{
				path: 'add', component: TaskAddComponent
			},
			{
				path: ':id', component: TaskViewComponent
			},
			{
				path: ':id/edit', component: TaskEditComponent
			},
		]
	},

];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TaskRoutingModule {

}