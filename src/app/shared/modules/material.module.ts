import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MatInputModule} from "@angular/material";
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

@NgModule({
	imports: [
		CommonModule,
		MatInputModule,
		MatButtonModule,
		MatListModule,
	],
	exports: [
		MatInputModule,
		MatButtonModule,
		MatListModule
	]
})
export class MaterialModule {

}