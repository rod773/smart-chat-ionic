import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Message } from '../models/message.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  messages: Message[] = [
    {
      sender: 'me',
      content: 'Hola Como Estas?',
    },
    {
      sender: 'bot',
      content: 'Estoy Bien y Tú Como Estas?',
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
