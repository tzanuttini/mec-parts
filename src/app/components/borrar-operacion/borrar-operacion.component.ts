import { Component, OnInit } from '@angular/core';
import { Operacion } from 'src/app/classes/operacion';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-borrar-operacion',
  templateUrl: './borrar-operacion.component.html',
  styleUrls: ['./borrar-operacion.component.css']
})
export class BorrarOperacionComponent implements OnInit {

  ope: Operacion;
  titulo = '';

  constructor(
    private dataSrv: DataService,
    private ruta: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.dataSrv.getOperacion(+this.ruta.snapshot.paramMap.get('id')).subscribe(
      (o: Operacion) => {
        this.ope = o;
      },
      error => console.log(error));
    this.titulo = 'Borrar Operación';
  }

  borrar() {
    this.dataSrv.delOperacion(this.ope.id).subscribe(count => {
      alert('Operaciones Borradas ' + count);
      this.router.navigate(['/lista-operaciones']);
    });
  }

}
