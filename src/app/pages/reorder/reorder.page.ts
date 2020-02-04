import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.page.html',
  styleUrls: ['./reorder.page.scss'],
})
export class ReorderPage implements OnInit {

  personajes = ['Aquaman', 'Superman', 'Batman', 'Flash', 'Mujer Maravilla'];
  constructor() { }

  ngOnInit() {
  }

  reorder( event){
    console.log(event);
    event.detail.complete();
  }

}
