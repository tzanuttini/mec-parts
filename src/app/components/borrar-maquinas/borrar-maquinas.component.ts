import { Component, OnInit } from '@angular/core';
import { Maquina } from 'src/app/classes/maquina';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-borrar-maquinas',
  templateUrl: './borrar-maquinas.component.html',
  styleUrls: ['./borrar-maquinas.component.css']
})
export class BorrarMaquinasComponent implements OnInit {

  maq: Maquina;
  titulo = '';

  constructor(
    private dataSrv: DataService,
    private ruta: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.dataSrv.getMaquina(+this.ruta.snapshot.paramMap.get('id')).subscribe(
      (m: Maquina) => {
        this.maq = m;
      },
      error => console.log(error));
    this.titulo = 'Borrar Máquina';
  }

  borrar() {
    this.dataSrv.delMaquina(this.maq.id).subscribe(count => {
      alert('Maquinas Borradas ' + count);
      this.router.navigate(['/lista-maquinas']);
    });
  }

}
