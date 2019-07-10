import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FirebaseService} from "../../../shared/services/firebase.service";

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss']
})
export class TaskAddComponent implements OnInit {

  tasksFormGroup: FormGroup;

  constructor(
      private fb: FirebaseService,
  ) {
    this.tasksFormGroup = new FormGroup({
      name: new FormControl('')
    });
  }

  ngOnInit() {
  }

  addTask() {
    const taskData = this.tasksFormGroup.value;
    this.fb.addTask(taskData).subscribe(
        (task) => {
          console.log(`Task with id: ${task.id} and name: ${task.name} was created`);
        }, error1 => {
          console.error(error1);
        }
    );
  }

}