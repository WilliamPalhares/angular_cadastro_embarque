import { Pipe, PipeTransform } from '@angular/core';
import { Funcionario } from '../models/funcionario';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Funcionario[], dataEmbarque: string): any {
    if(!items) return [];
    if(!dataEmbarque) return items;

    if (dataEmbarque) {
      return items.filter( it => {
        return it.DataHoraEmbarque >= dataEmbarque;
      });
    }
  }

}
