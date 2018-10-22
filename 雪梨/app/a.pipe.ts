import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'a'
})
export class APipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value+2;
    //return null;
  }

}
