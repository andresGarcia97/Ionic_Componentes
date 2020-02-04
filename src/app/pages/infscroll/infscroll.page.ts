import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infscroll',
  templateUrl: './infscroll.page.html',
  styleUrls: ['./infscroll.page.scss'],
})
export class InfscrollPage implements OnInit {

  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;

  data: any = Array(20);
  constructor() { }

  ngOnInit() {
  }

  loadData(event) {
    console.log('cargando contenido...');

    setTimeout(() => {

      if (this.data.lenght > 50) {
        event.target.complete();
        this.infiniteScroll.disabled = true;
        return;
      }

      const nuevoArray = Array(20);
      this.data.push(...nuevoArray);
      event.target.complete();
    }, 1000 );
  }

}
