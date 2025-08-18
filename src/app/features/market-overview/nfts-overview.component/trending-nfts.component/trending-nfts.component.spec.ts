import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingNftsComponent } from './trending-nfts.component';

describe('TrendingNftsComponent', () => {
  let component: TrendingNftsComponent;
  let fixture: ComponentFixture<TrendingNftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingNftsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingNftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
