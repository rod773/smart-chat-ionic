import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Message } from './../models/message.mpdel';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  messages: Message[] = [
    {
      sender: 'me',
      comment: 'Hola Como Estas?',
    },
    {
      sender: 'bot',
      comment: 'Estoy Bien y Tú Como Estas?',
    },
  ];

  form = new FormGroup({
    promt: new FormControl(''),
  });

  constructor() {}

  submit() {
    console.log(this.form.value);
  }
}
