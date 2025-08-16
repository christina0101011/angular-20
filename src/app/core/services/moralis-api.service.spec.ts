import { TestBed } from '@angular/core/testing';
import { MoralisApiService } from './moralis-api.service';


describe('MoralisApi', () => {
  let service: MoralisApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoralisApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
