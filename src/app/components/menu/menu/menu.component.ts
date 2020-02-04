import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../../services/services/servicio.service';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  conmponentes: Observable<Componente[]>;
  constructor(private service: ServicioService) { }

  ngOnInit() {
    this.conmponentes = this.service.getMenuOpts();
  }

}
