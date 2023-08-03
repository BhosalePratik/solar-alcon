import { TestBed } from '@angular/core/testing';

import { AllocateServiceService } from './allocate-service.service';

describe('AllocateServiceService', () => {
  let service: AllocateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllocateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
