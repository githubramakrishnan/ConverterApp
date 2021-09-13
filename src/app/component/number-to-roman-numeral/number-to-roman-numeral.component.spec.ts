import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberToRomanNumeralComponent } from './number-to-roman-numeral.component';

describe('NumberToRomanNumeralComponent', () => {
  let component: NumberToRomanNumeralComponent;
  let fixture: ComponentFixture<NumberToRomanNumeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberToRomanNumeralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberToRomanNumeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
