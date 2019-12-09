import { TestBed } from '@angular/core/testing';

import { EpicServiceService } from './epic.service.service';

describe('Epic.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EpicServiceService = TestBed.get(EpicServiceService);
    expect(service).toBeTruthy();
  });
});
