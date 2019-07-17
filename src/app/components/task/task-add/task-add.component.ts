import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FirebaseService} from "../../../shared/services/firebase.service";
import {Router} from "@angular/router";
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss']
})
export class TaskAddComponent implements OnInit {

  tasksFormGroup: FormGroup;
  rating: Array = [1,2,3,4,5];

  constructor(
      private fb: FirebaseService,
      private router: Router,
      private notify: MatSnackBar
  ) {}

  ngOnInit() {
    this.tasksFormGroup = new FormGroup({
      name: new FormControl(''),
      rating: new FormControl()
    });
  }

  addTask() {
    console.log(this.tasksFormGroup.value);
    const taskData = this.tasksFormGroup.value;
    this.fb.addTask(taskData).subscribe(
        (task) => {
          this.notify.open(
            `Таска з Firebase rating: ${task.rating} і іменем: ${task.name} створено`,
            'WoooW',
            {duration: 3000});
          this.router.navigate(['/tasks']);
        }, error1 => {
          console.error(error1);
        }
    );
  }

}
