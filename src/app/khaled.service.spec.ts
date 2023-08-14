import { TestBed } from '@angular/core/testing';

import { KhaledService } from './khaled.service';

describe('KhaledService', () => {
  let service: KhaledService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KhaledService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
