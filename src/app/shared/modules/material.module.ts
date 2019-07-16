import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule,

  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule,
  ]
})
export class MaterialModule {

}
