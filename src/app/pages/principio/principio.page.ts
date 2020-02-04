import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ServicioService } from 'src/app/services/services/servicio.service';
import { Observable } from 'rxjs';
import { Componente } from '../../interfaces/interfaces';

@Component({
  selector: 'app-principio',
  templateUrl: './principio.page.html',
  styleUrls: ['./principio.page.scss'],
})
export class PrincipioPage implements OnInit {

  componentes: Observable<Componente[]>;
  constructor(private menuController: MenuController, private service: ServicioService) { }

  ngOnInit() {
    this.componentes = this.service.getMenuOpts();
  }

  toggleMenu() {
    this.menuController.toggle();
  }

}
