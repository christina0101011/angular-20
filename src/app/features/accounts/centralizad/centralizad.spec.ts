import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Centralizad } from './centralizad';

describe('Centralizad', () => {
  let component: Centralizad;
  let fixture: ComponentFixture<Centralizad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Centralizad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Centralizad);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
