import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {AuthGuard} from "../../shared/services/auth.guard";
import {TaskComponent} from "./task.component";
import {TaskListComponent} from "./task-list/task-list.component";


const routes: Routes = [
	{ path: '', component: TaskComponent, canActivate: [AuthGuard], children:
		[
			{ path: 'task-list', component: TaskListComponent }
		]
	},

];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TaskRoutingModule {

}