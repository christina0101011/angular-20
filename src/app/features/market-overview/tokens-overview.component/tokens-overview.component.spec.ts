import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokensOverviewComponent } from './tokens-overview.component';

describe('TokensOverviewComponent', () => {
  let component: TokensOverviewComponent;
  let fixture: ComponentFixture<TokensOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TokensOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TokensOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
