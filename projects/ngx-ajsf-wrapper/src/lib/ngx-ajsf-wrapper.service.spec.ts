import { TestBed } from '@angular/core/testing';

import { NgxAjsfWrapperService } from './ngx-ajsf-wrapper.service';

describe('NgxAjsfWrapperService', () => {
  let service: NgxAjsfWrapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxAjsfWrapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
