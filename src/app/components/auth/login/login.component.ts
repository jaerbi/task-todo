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

  constructor(
      private auth: AuthService,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['accessDenied']) {
        this.warning = 'Access Denied, Please log in';
      }
    })
  }

  login() {
    this.auth.setAuthState(true);
    console.log(this.auth.getCurrentState());
  }


}
