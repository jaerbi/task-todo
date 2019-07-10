import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {FirebaseService} from "../../../shared/services/firebase.service";

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {

  id: string;

  constructor(
      private route: ActivatedRoute,
      private fb: FirebaseService
    ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
    }, error1 => {
      console.error(error1);
    });
  }

}
