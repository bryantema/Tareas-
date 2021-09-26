import { Component, OnInit } from '@angular/core';
import { InfoCarrosService } from 'src/app/services/info-carros.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(public _servicio: InfoCarrosService) { } 
  arrProductos: any[] = [
    
    { imagen: 'assets/img/lamborghini.jpg', nombre: 'Lamborghini', Precio: '$350,00', Descripcion: 'Deportivo', ID:'1'},
    { imagen: 'assets/img/Bugati.jpg', nombre: 'Bugati', Precio: '$3,000,000', Descripcion: 'Super carro', ID:'2'},
    { imagen: 'assets/img/Ford.jpg', nombre: 'Ford', Precio: '$ 90,000', Descripcion: 'Todo terreno', ID:'3'},]
   

 ngOnInit(): void {
  }

}
