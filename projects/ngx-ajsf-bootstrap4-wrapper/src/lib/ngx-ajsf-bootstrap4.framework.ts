import { Injectable } from '@angular/core';

import { Framework } from 'ngx-ajsf-wrapper';
import { NgxAjsfBootstrap4WrapperComponent } from './ngx-ajsf-bootstrap4-wrapper.component';

// Wrapper for Bootstrap 4
// https://github.com/ng-bootstrap/ng-bootstrap

@Injectable()
export class NgxAjsfBootstrap4Wrapper extends Framework {
  name = 'bootstrap-4';

  framework = NgxAjsfBootstrap4WrapperComponent;

  stylesheets = [
    '//stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
  ];

  scripts = [
    '//code.jquery.com/jquery-3.3.1.slim.min.js',
    '//cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js',
    '//stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js',
  ];
}
