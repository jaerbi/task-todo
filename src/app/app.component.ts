import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links: object = [
    { title: 'Home', link: '/home' },
    { title: 'Tasks', link: '/tasks' },
    { title: 'Login', link: '/login' },
  ];
}
