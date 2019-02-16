import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { Parte } from 'src/app/classes/parte';


@Component({
  selector: 'app-lista-partes',
  templateUrl: './lista-partes.component.html',
  styleUrls: ['./lista-partes.component.css']
})
export class ListaPartesComponent implements OnInit {
  partes: Parte[];
  titulo = 'Partes';

  constructor(private authSrv: AuthService, private dataSrv: DataService) { }

  ngOnInit() {
    this.dataSrv.getPartes().subscribe((p: Parte[]) => {
      this.partes = p;
    });
  }

}
