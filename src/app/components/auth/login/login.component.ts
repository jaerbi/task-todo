import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

import {AuthService} from "../../../shared/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  warning: string = '';
  title: string = 'Тобі потрібно залогінитися';
  isLogggetIn: boolean = false;

  constructor(
      private auth: AuthService,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.isLogggetIn = this.auth.getCurrentState();
    if (this.auth.getCurrentState()) {
      this.title = 'Прривіт, ласкаво прошу :)';
    }
    this.route.queryParams.subscribe((params: Params) => {
      if (params['accessDenied']) {
        this.warning = 'Access Denied, Please log in';
        this.title = 'Тобі потрібно залогінитися';
      } else {
        this.warning = '';
      }
    })
  }

  login() {
    this.auth.setAuthState(true);
    this.isLogggetIn = this.auth.getCurrentState();
    if (this.auth.getCurrentState()) {
      this.title = 'Прривіт, ласкаво прошу :)';
    }
  }


}