import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  datos = {
    nombre: '',
    pais: ''
  };
  constructor( private modalController: ModalController) { }

  ngOnInit() {
  }

 async abrirModal() {
    const modal = await this.modalController.create({
    component: ModalInfoPage,
    componentProps: {
      nombre: 'Andres',
      pais: 'Polombia'
    }
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();
    this.datos = data;
    console.log('retorno del modal', data);
  }
}
