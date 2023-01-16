import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  latitud:number=0;
  longitud:number=0;
  constructor() {}

  async obtenerCoordenadas(){
    const obtenerCoordenadas=await Geolocation.getCurrentPosition();
    this.latitud=obtenerCoordenadas.coords.latitude;
    this.longitud=obtenerCoordenadas.coords.longitude;
  }

}
