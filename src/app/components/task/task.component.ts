import {Component, OnInit} from "@angular/core";
import {FirebaseService} from "../../shared/services/firebase.service";
import {Task} from "../../shared/interfaces/task.interface";
import {Observable} from "rxjs";

@Component({
	selector: 'app-task',
	templateUrl: './task.component.html'
})
export class TaskComponent implements OnInit {

	tasks: Observable<Task[]>;

	constructor(private fb: FirebaseService) {
	}

	ngOnInit() {
		this.tasks = this.fb.getTasks();
	}

	deleteTask(task: Task) {
		this.fb.deleteTask(task.id);
	}
}