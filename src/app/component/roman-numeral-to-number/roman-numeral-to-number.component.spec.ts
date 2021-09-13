import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanNumeralToNumberComponent } from './roman-numeral-to-number.component';

describe('RomanNumeralToNumberComponent', () => {
  let component: RomanNumeralToNumberComponent;
  let fixture: ComponentFixture<RomanNumeralToNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RomanNumeralToNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RomanNumeralToNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
