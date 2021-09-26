import { Component, OnInit } from '@angular/core';
import { DetalleCarrosComponent } from 'src/app/pages/detalle-carros/detalle-carros.component';
import { InfoCarrosService } from 'src/app/services/info-carros.service';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  anio: number = new Date().getFullYear();
  
  constructor(public _servicio: InfoPaginaService, public _servicioc: InfoCarrosService) { }

  ngOnInit(): void {
  }
}
