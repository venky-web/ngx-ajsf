import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxJsonSchemaFormComponent } from './ngx-json-schema-form.component';
import { NoFrameworkModule } from './framework-library/no-framework.module';
import { WidgetLibraryModule } from './widget-library/widget-library.module';
import { NgxJsonSchemaFormService } from './ngx-json-schema-form.service';

@NgModule({
    declarations: [NgxJsonSchemaFormComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        WidgetLibraryModule,
        NoFrameworkModule
    ],
    exports: [
        NgxJsonSchemaFormComponent, 
        WidgetLibraryModule
    ],
    providers: [
        NgxJsonSchemaFormService,
    ]
})
export class NgxJsonSchemaFormModule { }
