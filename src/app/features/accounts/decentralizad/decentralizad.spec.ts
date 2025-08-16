import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Decentralizad } from './decentralizad';

describe('Decentralizad', () => {
  let component: Decentralizad;
  let fixture: ComponentFixture<Decentralizad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Decentralizad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Decentralizad);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
