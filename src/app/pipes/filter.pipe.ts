import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { TodoServiceService } from '../services/todo-service.service';

@Pipe({
  name: 'filter',
  pure:true
})
export class FilterPipe implements PipeTransform {

    constructor(private todoService:TodoServiceService){

    }

  transform(value: any[], arg: string): Todo[] {
      if(arg === "Completed"){
          return value.filter(item=>item.completed);
      }else if(arg==="Pending"){
          return value.filter(item=>!item.completed);
      }

    return value;
  }

}
