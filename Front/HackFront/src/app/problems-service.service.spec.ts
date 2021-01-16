import { TestBed } from '@angular/core/testing';

import { ProblemsServiceService } from './problems-service.service';

describe('ProblemsServiceService', () => {
  let service: ProblemsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProblemsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
