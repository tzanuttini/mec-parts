import { Operacion } from './../../classes/operacion';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-lista-operaciones',
  templateUrl: './lista-operaciones.component.html',
  styleUrls: ['./lista-operaciones.component.css']
})
export class ListaOperacionesComponent implements OnInit {

  operaciones: Operacion[];
  titulo = 'Operaciones';

  constructor(private authSrv: AuthService, private dataSrv: DataService) { }

  ngOnInit() {
    this.dataSrv.getOperaciones().subscribe((ope: Operacion[]) => {
      this.operaciones = ope;
    });
  }

}
