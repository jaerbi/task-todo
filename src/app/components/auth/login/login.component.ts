import {AfterContentInit, AfterViewInit, Component, ElementRef, OnChanges, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

import {AuthService} from "../../../shared/services/auth.service";
import {reduce} from 'rxjs/operators';
import {migrateLegacyGlobalConfig} from '@angular/cli/utilities/config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  warning: string = '';
  title: string = 'Тобі потрібно залогінитися';
  isLogggetIn: boolean = false;

  ngModelText: string = '';

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute
  ) {
  }

  @ViewChild('registration', { static: false }) registration: ElementRef;

  ngOnInit() {
    console.log('OnInit', this.registration);
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
    });
  }

  login() {
    this.auth.setAuthState(true);
    this.isLogggetIn = this.auth.getCurrentState();
    if (this.auth.getCurrentState()) {
      this.title = 'Прривіт, ласкаво прошу :)';
    }
  }

  sum(number) {
    let arr = [];
    for (let i = 0; i <= number; i++) {
      arr.push(i);
    }

    return arr.reduce((sum, value) => {
      return sum + value;
    });
  }

  updateParent(event) {
    console.log(event, 'updateParent');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', this.registration);
  }

}
