import { Component, Input, OnInit } from '@angular/core';
import { NgxJsonSchemaFormService } from '../ngx-json-schema-form.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tab-widget',
  template: `
    <div [class]="options?.htmlClass || ''">
      <root-widget
        [dataIndex]="dataIndex"
        [layoutIndex]="layoutIndex"
        [layout]="layoutNode.items"></root-widget>
    </div>`,
})
export class TabComponent implements OnInit {
  options: any;
  @Input() layoutNode: any;
  @Input() layoutIndex: number[];
  @Input() dataIndex: number[];

  constructor(
    private jsf: NgxJsonSchemaFormService
  ) { }

  ngOnInit() {
    this.options = this.layoutNode.options || {};
  }
}
