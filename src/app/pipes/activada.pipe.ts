import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activada'
})
export class ActivadaPipe implements PipeTransform {

  transform(value) {
    return value ? 'Sí' : 'No';
  }

}
