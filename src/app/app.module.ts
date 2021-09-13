import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RomanNumeralToNumberComponent } from './component/roman-numeral-to-number/roman-numeral-to-number.component';
import { NumberToRomanNumeralComponent } from './component/number-to-roman-numeral/number-to-roman-numeral.component';
import { RomanToNumberPipe } from './pipe/roman-to-number.pipe';
import { NumberToRomanPipe } from './pipe/number-to-roman.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RomanNumeralToNumberComponent,
    NumberToRomanNumeralComponent,
    RomanToNumberPipe,
    NumberToRomanPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
