import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo: string;
  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'alert',
      backdropDismiss: false,
      inputs: [
        {
          name: 'tname',
          type: 'text',
          placeholder: 'Nombre'
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
          handler: ( data ) => {
            console.log('Confirm Ok', data);
            this.titulo = data.tname;
          }
        }
      ]
    });

    await alert.present();
  }
}
