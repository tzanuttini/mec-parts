import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { AuthService } from 'src/app/services/auth.service';
import { Estacion } from 'src/app/classes/estacion';

@Component({
  selector: 'app-lista-estaciones',
  templateUrl: './lista-estaciones.component.html',
  styleUrls: ['./lista-estaciones.component.css']
})
export class ListaEstacionesComponent implements OnInit {
  estaciones: Estacion[];
  titulo = 'Estaciones';
  vendedor = false;
  isFirstOpen = true;

  constructor(private authSrv: AuthService, private dataSrv: DataService) { }

  ngOnInit() {
    this.dataSrv.getEstaciones().subscribe((e: Estacion[]) => {
      this.estaciones = e;
    });
    this.vendedor = this.authSrv.isVenta();
  }

}
