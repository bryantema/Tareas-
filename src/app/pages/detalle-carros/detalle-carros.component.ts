import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoCarrosService } from 'src/app/services/info-carros.service';

@Component({
  selector: 'app-detalle-carros',
  templateUrl: './detalle-carros.component.html',
  styleUrls: ['./detalle-carros.component.css']
})
export class DetalleCarrosComponent implements OnInit {

  ID:any;


  constructor(private router: ActivatedRoute, public _servicioc: InfoCarrosService) { }

  ngOnInit(): void {
    this.router.params.subscribe(params =>{
      this.ID= params;
      console.log('id: ', this.ID);
    })
  }

}
