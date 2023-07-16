import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreateFormComponent } from './user-create-form.component';

describe('UserCreateFormComponent', () => {
  let component: UserCreateFormComponent;
  let fixture: ComponentFixture<UserCreateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserCreateFormComponent]
    });
    fixture = TestBed.createComponent(UserCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
