import { Component, OnInit } from '@angular/core';
import { Operario } from 'src/app/classes/operario';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-lista-operarios',
  templateUrl: './lista-operarios.component.html',
  styleUrls: ['./lista-operarios.component.css']
})
export class ListaOperariosComponent implements OnInit {
  operarios: Operario[];
  titulo = 'Operarios';

  constructor(private authSrv: AuthService, private dataSrv: DataService) { }

  ngOnInit() {
    this.dataSrv.getOperarios().subscribe((op: Operario[]) => {
      this.operarios = op;
    });
  }

}
