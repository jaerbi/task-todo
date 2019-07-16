import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  @Input() item: string;
  @Output() update = new EventEmitter<string>();

  isActive: boolean = false;


  constructor() { }

  ngOnInit() {
  }

  registerAction() {
    this.update.emit(this.item);
  }



}
