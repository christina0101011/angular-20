import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftsOverviewComponent } from './nfts-overview.component';

describe('NftsOverviewComponent', () => {
  let component: NftsOverviewComponent;
  let fixture: ComponentFixture<NftsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NftsOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NftsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
