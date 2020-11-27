import { TestBed } from '@angular/core/testing';

import { PsqlService } from './psql.service';

describe('PsqlService', () => {
  let service: PsqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PsqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
