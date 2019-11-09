import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  usuarios: Observable<any>;
  @ViewChild('lista', {static: false}) lista: IonList;
  constructor(private dataService: DataService, private toastCtrl: ToastController ) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsers();
  }
  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }
  favorito(user) {
    console.log('Favorito', user);
    this.presentToast('Favorito');
    this.lista.closeSlidingItems();
  }
  borrar(user) {
    console.log('Borrar', user);
    this.presentToast('Borrar');
    this.lista.closeSlidingItems();
  }
}
