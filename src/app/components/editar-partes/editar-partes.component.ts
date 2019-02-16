import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Parte } from 'src/app/classes/parte';

@Component({
  selector: 'app-editar-partes',
  templateUrl: './editar-partes.component.html',
  styleUrls: ['./editar-partes.component.css']
})
export class EditarPartesComponent implements OnInit {
  // articuloForm = new FormGroup({ rubroControl: new FormControl() });
  part: Parte;
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
    this.nuevo = this.ruta.snapshot.url[this.ruta.snapshot.url.length - 1].toString() === 'nueva-parte';
    if (this.nuevo) {
      this.part = new Parte();
      this.part.id = -1;
      // this.part.cantidad = 0; // solo el admin puede editar la cantidad sin facturas
      this.part.codigo = 'N01';
      this.part.nombre = 'Sin nombre';
      this.part.descripcion = 'Sin descripcion';
      this.part.activa = true;
      // this.art.rubro.id = 1;
      // this.articuloForm.controls['rubroControl'].setValue(1); // pongamos rubro 1 = Varios
      // console.log(this.art);
      this.titulo = 'Nueva Parte';
    } else {
      this.dataSrv.getParte(+this.ruta.snapshot.paramMap.get('id')).subscribe(
        (a: Parte) => {
          this.part = a;
          // this.articuloForm.controls['rubroControl'].setValue(this.part.rubro.id);
        },
        error => console.log(error));
      this.titulo = 'Editar Parte';
    }
  }

  // segun estemos editando o agregando hacemos put o post
  confirmado() {
    this.enviado = true;
    // const i = this.articuloForm.controls['rubroControl'].value;
    // this.part.rubro = this.rubros.find(r => r.id === i);
    if (this.part.id !== -1) {
      this.guardarParte(); // put o patch
    } else {
      this.nuevaParte(); // post
    }

  }

  private guardarParte() {
    this.dataSrv.putParte(this.part).subscribe(
      (a) => this.router.navigate(['/lista-partes']),
      error => {
        alert('Error al guardar la parte: ' + error);
        this.enviado = true;
      }
    );
  }

  private nuevaParte() {
    this.part.id = null; // ponemos el -1 en null para que no explote
    this.dataSrv.newParte(this.part).subscribe(
      (a) => this.router.navigate(['/lista-partes']),
      error => {
        alert('Error al guardar la parte: ' + error);
        this.enviado = true;
      }
    );
  }

}


