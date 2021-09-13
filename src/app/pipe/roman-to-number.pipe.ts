import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'romanToNumber'
})
export class RomanToNumberPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return this.roman_to_Number(value) !==0?this.roman_to_Number(value) : '';
  }

  roman_to_Number(str1: any) {
    if (str1 == null) return -1;
    var num = this.char_to_int(str1.charAt(0));
    var pre, curr;

    for (var i = 1; i < str1.length; i++) {
      curr = this.char_to_int(str1.charAt(i));
      pre = this.char_to_int(str1.charAt(i - 1));
      if (curr <= pre) {
        num += curr;
      } else {
        num = num - pre * 2 + curr;
      }
    }

    return num;
  }

  char_to_int(c: any) {
    switch (c) {
      case 'I': return 1;
      case 'V': return 5;
      case 'X': return 10;
      case 'L': return 50;
      case 'C': return 100;
      case 'D': return 500;
      case 'M': return 1000;
      default: return 0;
    }
  }

}
