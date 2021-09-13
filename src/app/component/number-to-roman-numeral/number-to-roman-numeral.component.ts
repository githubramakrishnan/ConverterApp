import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-to-roman-numeral',
  templateUrl: './number-to-roman-numeral.component.html',
  styleUrls: ['./number-to-roman-numeral.component.scss']
})
export class NumberToRomanNumeralComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onKey(event: any) { 
    // this.values = event.target.value;
  }

}
