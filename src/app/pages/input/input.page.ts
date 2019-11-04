import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
  nombre: string;
  usuario: object = {
    email: '',
    password: ''
  };
  patron = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  constructor() { }

  ngOnInit() {
  }
  onSubmitTemplate() {
    console.log('Form Submit');
  }

}
