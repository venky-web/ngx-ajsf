import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAjsfBootstrap4WrapperComponent } from './ngx-ajsf-bootstrap4-wrapper.component';

describe('NgxAjsfBootstrap4WrapperComponent', () => {
  let component: NgxAjsfBootstrap4WrapperComponent;
  let fixture: ComponentFixture<NgxAjsfBootstrap4WrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxAjsfBootstrap4WrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAjsfBootstrap4WrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
