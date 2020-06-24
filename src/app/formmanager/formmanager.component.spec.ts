import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormmanagerComponent } from './formmanager.component';

describe('FormmanagerComponent', () => {
  let component: FormmanagerComponent;
  let fixture: ComponentFixture<FormmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
