import { TestBed } from '@angular/core/testing';

import { NgxAjsfBootstrap4WrapperService } from './ngx-ajsf-bootstrap4-wrapper.service';

describe('NgxAjsfBootstrap4WrapperService', () => {
  let service: NgxAjsfBootstrap4WrapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxAjsfBootstrap4WrapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
