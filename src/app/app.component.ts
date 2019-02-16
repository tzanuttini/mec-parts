import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mec-Parts';
  autor = 'UTN Paraná';
  angular = `Angular v${VERSION.full}`;
  anio = '2019';
  // anio = (new Date()).getFullYear();
}
