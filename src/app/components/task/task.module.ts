import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {TaskComponent} from './task.component';
import {TaskRoutingModule} from './task-routing.module';
import {TaskListComponent} from './task-list/task-list.component';
import {MaterialModule} from '../../shared/modules/material.module';
import {TaskAddComponent} from './task-add/task-add.component';
import {TaskEditComponent} from './task-edit/task-edit.component';
import {TaskViewComponent} from './task-view/task-view.component';
import {LoaderComponent} from '../../shared/components/loader/loader.component';

@NgModule({
  declarations: [
    TaskComponent,
    TaskListComponent,
    TaskAddComponent,
    TaskEditComponent,
    TaskViewComponent,
    LoaderComponent,
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
