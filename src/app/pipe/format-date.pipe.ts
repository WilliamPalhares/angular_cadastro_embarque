import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    if (value == "") {
      return;
    }
    
    return Intl.DateTimeFormat('pt-BR').format(value);
  }

}
