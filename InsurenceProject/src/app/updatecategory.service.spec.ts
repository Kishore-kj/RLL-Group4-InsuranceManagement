import { TestBed } from '@angular/core/testing';

import { UpdatecategoryService } from './updatecategory.service';

describe('UpdatecategoryService', () => {
  let service: UpdatecategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatecategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
