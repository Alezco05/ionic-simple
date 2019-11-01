import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {

  image:string = "assets/stan-lee.jpg";
  constructor() { }

  ngOnInit() {
  }

}
