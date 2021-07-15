import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAjsfWrapperComponent } from './ngx-ajsf-wrapper.component';

describe('NgxAjsfWrapperComponent', () => {
  let component: NgxAjsfWrapperComponent;
  let fixture: ComponentFixture<NgxAjsfWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxAjsfWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAjsfWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
