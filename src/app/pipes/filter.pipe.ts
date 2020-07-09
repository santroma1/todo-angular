import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Pipe({
  name: 'filter',
  pure:true
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], arg: string): Todo[] {
      if(arg === "Completed"){
          return value.filter(item=>item.completed);
      }else if(arg==="Pending"){
          return value.filter(item=>!item.completed);
      }

    return value;
  }

}
