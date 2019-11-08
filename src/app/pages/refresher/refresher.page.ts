import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {
  items:number[] = [];
  constructor() { }

  ngOnInit() {
  }
  doRefresh(e){
    console.log(e);
    setTimeout(()=>{
      this.items = Array(40);
      e.target.complete();
    },1500);
  }
}
