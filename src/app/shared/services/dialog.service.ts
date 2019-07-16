import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material';
import {DialogComponent} from '../components/dialog/dialog.component';

@Injectable({providedIn: 'root'})
export class DialogService {

  constructor(private dialog: MatDialog) {}

  openConfirm(msg) {
    return this.dialog.open(DialogComponent, {
      width: '360px',
      disableClose: true,
      panelClass: 'confirm-dialog',
      data: {
        message: msg,
      },
    });
  }
  
}
