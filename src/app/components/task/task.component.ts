import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
	selector: 'app-task',
	templateUrl: './task.component.html'
})
export class TaskComponent implements OnInit {

	showAdd: boolean = true;

	constructor(
		private router: Router
	) {
	}

	ngOnInit() {
	}

	onAdd() {
		this.showAdd = !this.showAdd
	}

}
