import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarketOverviewComponent } from './market-overview.component';

describe('MarketOverview', () => {
  let component: MarketOverviewComponent;
  let fixture: ComponentFixture<MarketOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarketOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
