import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularTokensComponent } from './popular-tokens.component';

describe('PopularTokensComponent', () => {
  let component: PopularTokensComponent;
  let fixture: ComponentFixture<PopularTokensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularTokensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularTokensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
