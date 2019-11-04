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
   },
   {
    icon: 'checkbox',
    name: 'CheckBox',
    redirectTo: '/check-box'
   },
   {
    icon: 'calendar',
    name: 'Date Time',
    redirectTo: '/date-time'
   },
   {
    icon: 'bug',
    name: 'Ion Fabs',
    redirectTo: '/fab'
   },
   {
    icon: 'grid',
    name: 'Grid',
    redirectTo: '/grid'
  },
    {
     icon: 'infinite',
     name: 'Infinite Scroll',
     redirectTo: '/infinite-scroll'
   },
   {
    icon: 'text',
    name: 'Inputs',
    redirectTo: '/input'
  }
  ];
  constructor() { }

  ngOnInit() {
  }

}
interface Compenente {
  icon: string;
  name: string;
  redirectTo: string;
}
