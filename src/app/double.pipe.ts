import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'double',
  pure : false
})
export class DoublePipe implements PipeTransform {

  transform(value : number = 0, y:number): any {
    return value + y ;
  }

}
