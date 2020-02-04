import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { ServicioService } from 'src/app/services/services/servicio.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segement',
  templateUrl: './segement.page.html',
  styleUrls: ['./segement.page.scss'],
})
export class SegementPage implements OnInit {

  valorSegmento = '';
  superHeroes: Observable<any>;
  @ViewChild(IonSegment, {static: true}) segment: IonSegment;
  constructor( private service: ServicioService) { }

  ngOnInit() {
    this.segment.value = 'todos';
    this.superHeroes = this.service.getHeroes();
  }

  segmentChanged( event) {
    this.valorSegmento = event.detail.value;
  }

}
