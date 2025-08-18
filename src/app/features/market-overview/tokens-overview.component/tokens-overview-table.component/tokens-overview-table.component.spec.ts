import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokensOverviewTableComponent } from './tokens-overview-table.component';

describe('TokensOverviewTableComponent', () => {
  let component: TokensOverviewTableComponent;
  let fixture: ComponentFixture<TokensOverviewTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TokensOverviewTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TokensOverviewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
