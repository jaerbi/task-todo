import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FirebaseService} from "../../../shared/services/firebase.service";
import {Task} from "../../../shared/interfaces/task.interface";
import {FormControl, FormGroup} from "@angular/forms";
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {

  @Input('item') task: Task;
  @Output() onEdit = new EventEmitter<void>();
  taskFormGroup: FormGroup;

  constructor(
      private route: ActivatedRoute,
      private fb: FirebaseService,
      private notify: MatSnackBar,
    ) {}

  ngOnInit() {
    this.taskFormGroup = new FormGroup({
      name: new FormControl(this.task.name),
      id: new FormControl(this.task.id),
    })
  }

  addTask() {
    const taskData = this.taskFormGroup.value;
    this.fb.editTask(taskData).subscribe(taskFromFirebase => {
      this.notify.open(
        `Таска з назвою: ${taskFromFirebase.name} була відредагована`,
        'Coll',
        {duration: 3000}
        );
      this.onEdit.emit();
    }, error => {
      console.error(error);
    });


  }

}
