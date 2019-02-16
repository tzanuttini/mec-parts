import { Component, OnInit } from '@angular/core';
import { Operario } from 'src/app/classes/operario';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-borrar-operario',
  templateUrl: './borrar-operario.component.html',
  styleUrls: ['./borrar-operario.component.css']
})
export class BorrarOperarioComponent implements OnInit {

  ope: Operario;
  titulo = '';

  constructor(
    private dataSrv: DataService,
    private ruta: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.dataSrv.getOperario(+this.ruta.snapshot.paramMap.get('id')).subscribe(
      (o: Operario) => {
        this.ope = o;
      },
      error => console.log(error));
    this.titulo = 'Borrar Parte';
  }

  borrar() {
    this.dataSrv.delOperario(this.ope.id).subscribe(count => {
      alert('Operarios Borrados ' + count);
      this.router.navigate(['/lista-operarios']);
    });
  }

}
