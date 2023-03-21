import { TestBed } from '@angular/core/testing';

import { HirekService } from './hirek.service';

describe('HirekService', () => {
  let service: HirekService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HirekService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
