import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {AuthGuard} from "../../shared/services/auth.guard";
import {TaskComponent} from "./task.component";
import {TaskListComponent} from "./task-list/task-list.component";


const routes: Routes = [
	{ path: 'task', component: TaskComponent, children:
		[
			// { path: 'list', component: TaskListComponent }
		]
	},

];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TaskRoutingModule {

}