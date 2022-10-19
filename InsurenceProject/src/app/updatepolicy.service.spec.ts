import { TestBed } from '@angular/core/testing';

import { UpdatepolicyService } from './updatepolicy.service';

describe('UpdatepolicyService', () => {
  let service: UpdatepolicyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatepolicyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
