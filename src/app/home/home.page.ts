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

  loading: boolean = false;

  submit() {
    console.log(this.form.value);

    let promt = this.form.value.promt as string;

    // ******* Mensaje del usuario ********
    let usrMsg: Message = {
      sender: 'me',
      content: promt,
    };

    this.messages.push(usrMsg);

    // ******* Mensaje del bot ********
    let botMsg: Message = {
      sender: 'bot',
      content: '',
    };

    this.messages.push(botMsg);

    this.loading = true;
  }
}
