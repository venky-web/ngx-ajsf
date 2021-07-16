import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { 
  Framework, 
  FrameworkLibraryService, 
  NgxJsonSchemaFormModule, 
  NgxJsonSchemaFormService, 
  WidgetLibraryModule, 
  WidgetLibraryService 
} from 'ngx-ajsf-wrapper';
import { NgxAjsfBootstrap4WrapperComponent } from './ngx-ajsf-bootstrap4-wrapper.component';
import { NgxAjsfBootstrap4Wrapper } from './ngx-ajsf-bootstrap4.framework';



@NgModule({
  declarations: [
    NgxAjsfBootstrap4WrapperComponent
  ],
  imports: [
    NgxJsonSchemaFormModule,
    CommonModule,
    WidgetLibraryModule,
  ],
  exports: [
    NgxAjsfBootstrap4WrapperComponent,
    NgxJsonSchemaFormModule,
  ],
  providers: [
    NgxJsonSchemaFormService,
    FrameworkLibraryService,
    WidgetLibraryService,
    {provide: Framework, useClass: NgxAjsfBootstrap4Wrapper, multi: true},
  ],
  entryComponents: [
    NgxAjsfBootstrap4WrapperComponent,
  ]
})
export class NgxAjsfBootstrap4WrapperModule { }
