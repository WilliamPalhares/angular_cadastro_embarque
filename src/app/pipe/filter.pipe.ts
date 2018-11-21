import { Pipe, PipeTransform } from '@angular/core';
import { Funcionario } from '../models/funcionario';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Funcionario[], dataEmbarque: string, dataDesembarque: string): any {
    if(!items) return [];
    if(!dataEmbarque) return items;
    
    console.log(dataEmbarque);
    console.log(items);

    return items.filter( it => {
      return it.DataHoraEmbarque >= dataEmbarque;
    });
  }

}
