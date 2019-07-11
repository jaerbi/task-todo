import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Task} from "../../../shared/interfaces/task.interface";
import {ActivatedRoute, Params} from "@angular/router";
import {FirebaseService} from "../../../shared/services/firebase.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit, AfterViewInit {

  task: Task;
  isEdit: boolean = false;

  constructor(
      private route: ActivatedRoute,
      private fb: FirebaseService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.fb.getTask(params.id).subscribe((resp) => {
        this.task = resp;
        console.log(this.task);
      })
    }, error1 => {
      console.error(error1);
    });
  }

  openEdit() {
    this.isEdit = !this.isEdit;
  }

}
