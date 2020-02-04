import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicioService } from 'src/app/services/services/servicio.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.page.html',
  styleUrls: ['./lists.page.scss'],
})
export class ListsPage implements OnInit {

  @ViewChild('lista', {static: false}) lista: IonList;
  usuarios: Observable<any>;
  constructor(private service: ServicioService, private toastController: ToastController) { }

  ngOnInit() {

    this.usuarios = this.service.getUsers();

  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  favorite(user) {
    this.presentToast('Se guardo el usuario: ' + user.name);
    this.lista.closeSlidingItems();
  }
  share(user) {
    this.presentToast('Se compartio el usuario: ' + user.username);
    this.lista.closeSlidingItems();
  }
  delete(user) {
    this.presentToast('Se borro al usuario con el correo: ' + user.email);
    this.lista.closeSlidingItems();
  }

}
