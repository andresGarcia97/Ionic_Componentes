import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() nombre: string;
  @Input() pais: string;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  salirSinArg() {
    this.modalController.dismiss({
      nombre: this.nombre,
      pais: this.pais
    });
  }

  salirConArg() {

    this.modalController.dismiss({
      nombre: 'Felipe',
      pais: 'España'
    });
  }

}
