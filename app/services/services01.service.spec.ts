import { TestBed } from '@angular/core/testing';

import { Services01Service } from './services01.service';

describe('Services01Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Services01Service = TestBed.get(Services01Service);
    expect(service).toBeTruthy();
  });
});
