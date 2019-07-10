import {Injectable} from "@angular/core";
import {AngularFirestore} from "@angular/fire/firestore";
import {from, Observable} from "rxjs";
import {first, map, switchMap, tap} from "rxjs/operators";
import {Task} from "../interfaces/task.interface";

@Injectable({providedIn: 'root'})
export class FirebaseService {


	constructor(private db: AngularFirestore) {
	}

	getTasks(): Observable<Task[]> {
		return this.db.collection<Task>('tasks')
			.snapshotChanges()
			.pipe(
				map((actions) => {
					return actions.map(action => {
						const data = action.payload.doc.data() as Task;

						return {
							id: action.payload.doc.id,
							name: data.name
						};
					});
				})
			);
	}

	deleteTask(id: string): Observable<Task> {
		return this.db.doc<Task>(`tasks/${id}`)
			.get()
			.pipe(
				first(),
				switchMap(taskDoc => {
					if (!taskDoc || !taskDoc.data()) {
						throw new Error('Task does not found')
					} else {
						return from(
							this.db.doc<Task>(`tasks/${id}`)
								.delete()
						).pipe(
							map(() => {
								const data = taskDoc.data() as Task;
								data.id = taskDoc.id;
								return data;
							})
						);
					}
				})
			);
	}

	addTask(task: Task): Observable<Task> {
		return from(
			this.db.collection('tasks').add({
				name: task.name
			})
		).pipe(
			map(taskRef => {
				task.id = taskRef.id;
				return task;
			})
		);
	}

}