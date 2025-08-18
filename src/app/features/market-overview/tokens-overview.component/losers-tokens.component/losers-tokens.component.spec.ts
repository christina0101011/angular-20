import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LosersTokensComponent } from './losers-tokens.component';

describe('LosersTokensComponent', () => {
  let component: LosersTokensComponent;
  let fixture: ComponentFixture<LosersTokensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LosersTokensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LosersTokensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
