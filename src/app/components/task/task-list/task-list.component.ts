import { Component, OnInit } from '@angular/core';
import {Task} from "../../../shared/interfaces/task.interface";
import {FirebaseService} from "../../../shared/services/firebase.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: Observable<Task[]>;

  constructor(private fb: FirebaseService) { }

  ngOnInit() {
    this.tasks = this.fb.getTasks();
  }

  deleteTask(task: Task) {
    const obs = this.fb.deleteTask(task.id);

    obs.subscribe(taskFromFirebase => {
      console.log(`Task with id: ${taskFromFirebase.id} was deleted`);
    }, error => {
      console.error(error);
    });
  }

}
