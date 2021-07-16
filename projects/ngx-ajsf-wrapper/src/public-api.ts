/*
 * Public API Surface of ngx-ajsf-wrapper
 */

export { NgxJsonSchemaFormModule } from './lib/ngx-json-schema-form.module';
export { TitleMapItem, ErrorMessages, NgxJsonSchemaFormService } from './lib/ngx-json-schema-form.service';
export { NgxJsonSchemaFormComponent } from './lib/ngx-json-schema-form.component';
export { Framework } from './lib/framework-library/framework';
export { FrameworkLibraryService } from './lib/framework-library/framework-library.service';
export {
    deValidationMessages,
    enValidationMessages,
    esValidationMessages,
    frValidationMessages,
    itValidationMessages,
    ptValidationMessages,
    zhValidationMessages
} from './lib/locale';
export * from './lib/widget-library';
export * from './lib/widget-library/widget-library.module';
export * from './lib/shared';
