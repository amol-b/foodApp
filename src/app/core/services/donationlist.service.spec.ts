import { TestBed } from '@angular/core/testing';

import { DonationlistService } from './donationlist.service';

describe('DonationlistService', () => {
  let service: DonationlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonationlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
