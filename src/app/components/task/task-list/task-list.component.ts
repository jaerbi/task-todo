import {Component, OnInit} from '@angular/core';
import {Task} from '../../../shared/interfaces/task.interface';
import {FirebaseService} from '../../../shared/services/firebase.service';
import {Observable} from 'rxjs';
import {DialogService} from '../../../shared/services/dialog.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: Observable<Task[]>;

  constructor(
    private dialogService: DialogService,
    private fb: FirebaseService,
    private notify: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.tasks = this.fb.getTasks().pipe(
            tap((result: Task[]) => result.sort((a, b) => a.name - b.name))
        );
    console.log('test 0.1');
  }

  deleteTask(task: Task) {
    this.dialogService.openConfirm('Ви впевнені що хочете видалити цей запис?')
      .afterClosed()
      .subscribe((result) => {
        if(result) {
          const obs = this.fb.deleteTask(task.id);
          obs.subscribe(taskFromFirebase => {
            this.notify.open(
              `Таска з рейтингом: ${taskFromFirebase.rating} була видалена`,
              'OK',
              {duration: 3000}
              )
          }, error => {
            console.error(error);
          });
        }
      });
  }

}
