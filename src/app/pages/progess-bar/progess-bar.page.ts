import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progess-bar',
  templateUrl: './progess-bar.page.html',
  styleUrls: ['./progess-bar.page.scss'],
})
export class ProgessBarPage implements OnInit {

  porcentaje:number;
  min:number = 1;
  max:number = 100;
  constructor() { }

  ngOnInit() {
  }
  cambioRango(e){
    this.porcentaje = (e.detail.value/100);
  }

}
