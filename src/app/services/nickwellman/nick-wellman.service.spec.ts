import { TestBed } from '@angular/core/testing';

import { NickWellmanService } from './nick-wellman.service';

describe('NickWellmanService', () => {
  let service: NickWellmanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NickWellmanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
