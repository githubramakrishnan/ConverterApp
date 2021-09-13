import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roman-numeral-to-number',
  templateUrl: './roman-numeral-to-number.component.html',
  styleUrls: ['./roman-numeral-to-number.component.scss']
})
export class RomanNumeralToNumberComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 //Remove below method later
  onKey(event: any) { 
    // this.values = event.target.value;
  }

}
