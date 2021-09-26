import { TestBed } from '@angular/core/testing';

import { InfoCarrosService } from './info-carros.service';

describe('InfoCarrosService', () => {
  let service: InfoCarrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoCarrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
