import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoCarros } from '../interfaces/info-carros.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoCarrosService {
  info: InfoCarros = {};
  cargada = false;
  constructor(private http: HttpClient) { 
    console.log("Servicio carros inicializado");
    this.http.get('assets/data/data-carro.json')
    .subscribe( (resp: InfoCarros) => {
      console.log(resp);
      this.cargada = true;
      this.info = resp;
      console.log(resp.nombre);
    })
  }
}
