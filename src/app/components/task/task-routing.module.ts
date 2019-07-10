import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {AuthGuard} from "../../shared/services/auth.guard";
import {TaskComponent} from "./task.component";
import {TaskEditComponent} from "./task-edit/task-edit.component";
import {TaskListComponent} from "./task-list/task-list.component";
import {TaskAddComponent} from "./task-add/task-add.component";


const routes: Routes = [
	{ path: '', component: TaskComponent, children:
		[
			{ path: 'tasks', component: TaskListComponent, children:
				[
					// {
					// 	path: ':id', component: TaskEditComponent
					// },
					{
						path: ':id/edit', component: TaskEditComponent
					},
				]
			}
		]
	},

];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TaskRoutingModule {

}