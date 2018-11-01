import { TestBed } from '@angular/core/testing';

import { DayroomServiceService } from './dayroom-service.service';

describe('DayroomServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DayroomServiceService = TestBed.get(DayroomServiceService);
    expect(service).toBeTruthy();
  });
});
