import { TestBed } from '@angular/core/testing';

import { DeleteapprovalService } from './deleteapproval.service';

describe('DeleteapprovalService', () => {
  let service: DeleteapprovalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteapprovalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
