import { TestBed } from '@angular/core/testing';

import { FootballStoreService } from './football-store.service';

describe('FootballStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FootballStoreService = TestBed.get(FootballStoreService);
    expect(service).toBeTruthy();
  });
});
