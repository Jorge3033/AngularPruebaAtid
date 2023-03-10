import { TestBed } from '@angular/core/testing';

import { ShortterLinkService } from './shortter-link.service';

describe('ShortterLinkService', () => {
  let service: ShortterLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShortterLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
