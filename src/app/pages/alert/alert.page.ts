import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo: string = "Alert Page";
  valor: string;
  constructor(private alertCtrl:AlertController) {
   }

  ngOnInit() {
  }
  // Funcion Que llama a la alerta
  async presentAlert() {
    // Constante alert que es asincrona
    const alert = await this.alertCtrl.create({
      //Opciones
      backdropDismiss: false, // No se puede cerrar sin dar click en una opcion
      header: 'Alert', // Titulo
      subHeader: 'Subtitle', // Subtitulo
      message: 'This is an alert message.', // Mensaje
      buttons: ['OK'] // Texto del boton
    });
    // Ejecuta el alert
    await alert.present();
  }
  // Funcion Que llama a la alerta
  async presentAlertMultipleButtons() {
    const alert = await this.alertCtrl.create({
      header: 'Multiples Alertas',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['Cancel', 'Open Modal', 'Delete'] // Array de botones
    });

    await alert.present();
  }
  // Funcion Que llama a la alerta
  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          //LLamara a una funcion
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ] //Array de botones cada uno con su propio opciones
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Prompt!',
      inputs: [
        {
          name: 'nombre',
          type: 'text',
          placeholder: 'Digite el titulo'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            this.titulo = data.nombre;
          }
        }
      ]
    });

    await alert.present();
  }
}
