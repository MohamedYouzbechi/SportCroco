import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {

  transform(ch: string) {
    const v = ["a","u","e","i","o","y"];
    let result = "";

    for (let i = 0; i < ch.length; i++) {
      let temp = ch[i];
      for (let j = 0; j < v.length; j++) {
        if (ch[i].toUpperCase() == v[j].toUpperCase()) {
          temp = "*";
          break;
        }

      }
      result = result + temp;
    }
    return result;

  }

}
