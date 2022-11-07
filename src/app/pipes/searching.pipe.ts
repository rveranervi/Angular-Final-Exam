import { Pipe, PipeTransform } from '@angular/core';
import { ProductCart } from '../interfaces/content/cart-items';

@Pipe({
  name: 'searching'
})
export class SearchingPipe implements PipeTransform {

  transform(value: ProductCart[], consulta: string): ProductCart[] {
    if(consulta === '') return value;
    return value.filter((p) => {
      return (
        p.nombre.toLowerCase().indexOf(consulta.toLowerCase())>-1 ||
        p.categoria.toLowerCase().indexOf(consulta.toLowerCase())>-1 ||
        p.marca.toLowerCase().indexOf(consulta.toLowerCase())>-1
      )
    })
/*
    for(const plato of value){
      if(plato.nombre.toLowerCase().indexOf(consulta.toLowerCase())>-1){
        resultado.push(plato)
      }
    }
    return resultado;
*/
  }

}
