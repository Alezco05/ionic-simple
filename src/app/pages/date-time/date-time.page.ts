import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNaci = moment().format('YYYY-MM-DD');
  min = moment().format('YYYY-MM-DD');
  max = moment().add(1, 'years').format('YYYY-MM-DD');
  customDate: string;
  customPickerOptions: any;

constructor() {
  this.customPickerOptions = {
    buttons: [{
      text: 'Save',
      handler: (event) => {
        console.log('Clicked Save!');
        console.log(event);
      }
    }, {
      text: 'Log',
      handler: () => {
        console.log('Clicked Log. Do not Dismiss.');
        return false;
      }
    }]
  };
 }

ngOnInit() {
  console.log(this.max);
  }
cambioFecha(event) {
    console.log('cas', event);
  }
}
