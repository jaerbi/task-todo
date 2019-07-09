import {Injectable} from "@angular/core";
import {AngularFirestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {Task} from "../interfaces/task.interface";
import {map} from "rxjs/operators";

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

	deleteTask(id: string) {
		this.db.doc<Task>(`tasks/${id}`)
			.delete();
	}

}