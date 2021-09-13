import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToRoman'
})
export class NumberToRomanPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return this.numberToRoman(value);
  }

   numberToRoman(num: any) {
    var lookup: any = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
        roman = '',
        i;
    for ( i in lookup ) {
      while ( num >= lookup[i] ) {
        roman += i;
        num -= lookup[i];
      }
    }
    return roman;
  }
 

}
