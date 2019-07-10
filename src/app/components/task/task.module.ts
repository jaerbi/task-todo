import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

import { TaskComponent } from "./task.component";
import { TaskRoutingModule } from "./task-routing.module";
import { TaskListComponent } from './task-list/task-list.component';
import { MaterialModule } from "../../shared/modules/material.module";
import { TaskAddComponent } from './task-add/task-add.component';

@NgModule({
	declarations: [
		TaskComponent,
		TaskListComponent,
		TaskAddComponent
	],
	imports: [
		CommonModule,
		TaskRoutingModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule,
	],
	exports: []
})
export class TaskModule {

}