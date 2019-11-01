import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Compenente[] = [
   {
    icon: 'american-football',
    name: 'Action-Sheet',
    redirectTo: '/action-sheet'
   },
   {
    icon: 'appstore',
    name: 'Alert',
    redirectTo: '/alert'
   },
   {
    icon: 'beaker',
    name: 'Avatar',
    redirectTo: '/avatar'
   },
   {
    icon: 'contact',
    name: 'Login',
    redirectTo: '/login'
   },
   {
    icon: 'radio-button-on',
    name: 'Botones Y Router',
    redirectTo: '/botones'
   },
   {
    icon: 'mail',
    name: 'Cards',
    redirectTo: '/cards'
   }
  ];
  constructor() { }

  ngOnInit() {
  }

}
interface Compenente {
  icon: string;
  name: string;
  redirectTo:string;
}