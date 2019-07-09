import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import { TaskComponent } from "./task.component";
import { TaskRoutingModule } from "./task-routing.module";
import { TaskListComponent } from './task-list/task-list.component';
import { MaterialModule } from "../../shared/modules/material.module";

@NgModule({
	declarations: [
		TaskComponent,
		TaskListComponent
	],
	imports: [
		CommonModule,
		TaskRoutingModule,
		MaterialModule
	],
	exports: []
})
export class TaskModule {

}