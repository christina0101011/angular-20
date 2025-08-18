import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftsGalleryComponent } from './nfts-gallery.component';

describe('NftsGalleryComponent', () => {
  let component: NftsGalleryComponent;
  let fixture: ComponentFixture<NftsGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NftsGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NftsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
