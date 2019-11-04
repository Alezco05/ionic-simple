import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.page.html',
  styleUrls: ['./check-box.page.scss'],
})
export class CheckBoxPage implements OnInit {
  data: object = [{
    name: 'primary',
    selected: false
  },
  {
    name: 'secondary',
    selected: true
  },
  {
    name: 'tertiary',
    selected: false
  },
  {
    name: 'success',
    selected: true
  }];
  constructor() { }

  ngOnInit() {
  }
  onClick(check: object) {
    console.log(check);
  }

}
