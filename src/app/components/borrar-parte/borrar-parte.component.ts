import { Component, OnInit } from '@angular/core';
import { Parte } from 'src/app/classes/parte';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-borrar-parte',
  templateUrl: './borrar-parte.component.html',
  styleUrls: ['./borrar-parte.component.css']
})
export class BorrarParteComponent implements OnInit {

  part: Parte;
  titulo = '';

  constructor(
    private dataSrv: DataService,
    private ruta: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.dataSrv.getParte(+this.ruta.snapshot.paramMap.get('id')).subscribe(
      (p: Parte) => {
        this.part = p;
      },
      error => console.log(error));
    this.titulo = 'Borrar Parte';
  }

  borrar() {
    this.dataSrv.delParte(this.part.id).subscribe(count => {
      alert('Partes Borradas ' + count);
      this.router.navigate(['/lista-partes']);
    });
  }

}
