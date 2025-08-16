import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxHub } from './tax-hub';

describe('TaxHub', () => {
  let component: TaxHub;
  let fixture: ComponentFixture<TaxHub>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxHub]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxHub);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
