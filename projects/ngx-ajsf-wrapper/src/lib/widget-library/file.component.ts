import { AbstractControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { NgxJsonSchemaFormService } from '../ngx-json-schema-form.service';


// TODO: Add this control

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'file-widget',
  template: ``,
})
export class FileComponent implements OnInit {
  formControl: AbstractControl;
  controlName: string;
  controlValue: any;
  controlDisabled = false;
  boundControl = false;
  options: any;
  @Input() layoutNode: any;
  @Input() layoutIndex: number[];
  @Input() dataIndex: number[];

  constructor(
    private jsf: NgxJsonSchemaFormService
  ) { }

  ngOnInit() {
    this.options = this.layoutNode.options || {};
    this.jsf.initializeControl(this);
  }

  updateValue(event) {
    this.jsf.updateValue(this, event.target.value);
  }
}
