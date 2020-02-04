import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.page.html',
  styleUrls: ['./dates.page.scss'],
})
export class DatesPage implements OnInit {


  fechaNacimiento: Date = new Date();
  constructor() { }

  ngOnInit() {
  }

  cambioFecha( event ) {
    console.log('ionChangue', event);
  }

}
