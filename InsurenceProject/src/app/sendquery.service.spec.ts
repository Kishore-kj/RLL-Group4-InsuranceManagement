import { TestBed } from '@angular/core/testing';

import { SendqueryService } from './sendquery.service';

describe('SendqueryService', () => {
  let service: SendqueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendqueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
