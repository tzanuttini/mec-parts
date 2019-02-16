import { Component, OnInit } from '@angular/core';
import { Operacion } from 'src/app/classes/operacion';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-editar-operacion',
  templateUrl: './editar-operacion.component.html',
  styleUrls: ['./editar-operacion.component.css']
})
export class EditarOperacionComponent implements OnInit {

  operacion: Operacion;
  nuevo = false;
  titulo = '';
  enviado = false;
  admin = true;

  constructor(
    private dataSrv: DataService,
    private ruta: ActivatedRoute,
    private router: Router, private authSrv: AuthService) {
  }

  ngOnInit() {
    this.admin = !this.authSrv.isAdmin();
    this.nuevo = this.ruta.snapshot.url[this.ruta.snapshot.url.length - 1].toString() === 'nueva-operacion';
    if (this.nuevo) {
      this.operacion = new Operacion();
      this.operacion.id = -1;
      this.operacion.nombre = 'Sin nombre';
      this.titulo = 'Nueva Operación';
    } else {
      this.dataSrv.getOperacion(+this.ruta.snapshot.paramMap.get('id')).subscribe(
        (o: Operacion) => {
          this.operacion = o;
        },
        error => console.log(error));
      this.titulo = 'Editar Operación';
    }
  }

  // segun estemos editando o agregando hacemos put o post
  confirmado() {
    this.enviado = true;
    if (this.operacion.id !== -1) {
      this.guardarOperacion(); // put o patch
    } else {
      this.nuevaOperacion(); // post
    }

  }

  private guardarOperacion() {
    this.dataSrv.putOperacion(this.operacion).subscribe(
      (a) => this.router.navigate(['/lista-operaciones']),
      error => {
        alert('Error al guardar la operación: ' + error);
        this.enviado = true;
      }
    );
  }

  private nuevaOperacion() {
    this.operacion.id = null; // ponemos el -1 en null para que no explote
    this.dataSrv.newOperacion(this.operacion).subscribe(
      (a) => this.router.navigate(['/lista-operaciones']),
      error => {
        alert('Error al guardar la operación: ' + error);
        this.enviado = true;
      }
    );
  }

}


