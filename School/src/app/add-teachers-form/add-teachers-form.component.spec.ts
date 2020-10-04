import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeachersFormComponent } from './add-teachers-form.component';

describe('AddTeachersFormComponent', () => {
  let component: AddTeachersFormComponent;
  let fixture: ComponentFixture<AddTeachersFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTeachersFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTeachersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
