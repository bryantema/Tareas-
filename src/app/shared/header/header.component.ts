import { Component, OnInit } from '@angular/core';
import { InfoCarrosService } from 'src/app/services/info-carros.service';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _service: InfoPaginaService, public _servicec: InfoCarrosService) { }

  ngOnInit(): void {
  }

}
