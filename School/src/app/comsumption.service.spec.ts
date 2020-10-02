import { TestBed } from '@angular/core/testing';

import { ComsumptionService } from './comsumption.service';

describe('ComsumptionService', () => {
  let service: ComsumptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComsumptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
