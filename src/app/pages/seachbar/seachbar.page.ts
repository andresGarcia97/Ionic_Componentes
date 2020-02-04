import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/services/services/servicio.service';

@Component({
  selector: 'app-seachbar',
  templateUrl: './seachbar.page.html',
  styleUrls: ['./seachbar.page.scss'],
})
export class SeachbarPage implements OnInit {

  albumes: any[] = [];
  textoBuscar = '';
  constructor(private service: ServicioService) { }

  ngOnInit() {
    this.service.getAlbums()
      .subscribe( albumes => {
        console.log( albumes );
        this.albumes = albumes;
      });
  }

  buscar( event) {
    this.textoBuscar = event.detail.value;
  }

}
