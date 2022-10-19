import { TestBed } from '@angular/core/testing';

import { DisapprovedService } from './disapproved.service';

describe('DisapprovedService', () => {
  let service: DisapprovedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisapprovedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
