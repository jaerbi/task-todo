import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {

  // Авторизація користувача
  private isAuthenticated = new BehaviorSubject<boolean>(false);

  // Зміна стану
  public setAuthState(state: boolean) {
    this.isAuthenticated.next(state);
  }

  // Стрім (потік) зміни стану авторизації юзера
  public getStateChange(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }

  // стан в даний момент
  public getCurrentState(): boolean {
    return this.isAuthenticated.getValue();
  }
}
