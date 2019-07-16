import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {RegistrationComponent} from "./registration/registration.component";
import {LoginComponent} from "./login/login.component";
import {AuthComponent} from "./auth.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {MaterialModule} from "../../shared/modules/material.module";
import {FormsModule} from '@angular/forms';

@NgModule({
	declarations: [
		LoginComponent,
		RegistrationComponent,
		AuthComponent
	],
	imports: [
		CommonModule,
		AuthRoutingModule,
    FormsModule,
		MaterialModule
	],
	exports: []
})
export class AuthModule {

}
