import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {FirebaseService} from "../../../shared/services/firebase.service";
import {Task} from "../../../shared/interfaces/task.interface";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {

  @Input('item') task: Task;
  taskFormGroup: FormGroup;

  constructor(
      private route: ActivatedRoute,
      private fb: FirebaseService
    ) {}

  ngOnInit() {
    console.log(this.task);
    this.taskFormGroup = new FormGroup({
      name: new FormControl(this.task.name)
    })
  }

  addTask() {
    console.log('111');

  }

}
