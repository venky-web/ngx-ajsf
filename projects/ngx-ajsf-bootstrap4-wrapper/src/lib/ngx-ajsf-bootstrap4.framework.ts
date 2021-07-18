import { Injectable } from '@angular/core';

import { Framework } from 'ngx-ajsf-wrapper';
import { NgxAjsfBootstrap4WrapperComponent } from './ngx-ajsf-bootstrap4-wrapper.component';

// Wrapper for Bootstrap 4
// https://github.com/ng-bootstrap/ng-bootstrap

@Injectable()
export class NgxAjsfBootstrap4Wrapper extends Framework {
  name = 'bootstrap-4';

  framework = NgxAjsfBootstrap4WrapperComponent;

  stylesheets = [];

  scripts = [];
}
