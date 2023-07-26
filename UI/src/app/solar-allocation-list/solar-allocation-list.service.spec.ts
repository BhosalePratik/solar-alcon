import { TestBed } from '@angular/core/testing';

import { SolarAllocationListService } from './solar-allocation-list.service';

describe('SolarAllocationListService', () => {
  let service: SolarAllocationListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolarAllocationListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
