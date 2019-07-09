import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {TaskComponent} from "./task.component";
import { TaskRoutingModule } from "./task-routing.module";
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
	declarations: [
		TaskComponent,
		TaskListComponent
	],
	imports: [
		CommonModule,
		TaskRoutingModule
	],
	exports: []
})
export class TaskModule {

}