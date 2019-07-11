import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  @Output() onEdit = new EventEmitter<void>();
  taskFormGroup: FormGroup;

  constructor(
      private route: ActivatedRoute,
      private fb: FirebaseService
    ) {}

  ngOnInit() {
    console.log(this.task);
    this.taskFormGroup = new FormGroup({
      name: new FormControl(this.task.name),
      id: new FormControl(this.task.id),
    })
  }

  addTask() {
    const taskData = this.taskFormGroup.value;
    console.log(taskData);
    this.fb.editTask(taskData).subscribe(taskFromFirebase => {
      console.log(`Task with id: ${taskFromFirebase.id} was edited`);
      this.onEdit.emit();
    }, error => {
      console.error(error);
    });


  }

}
