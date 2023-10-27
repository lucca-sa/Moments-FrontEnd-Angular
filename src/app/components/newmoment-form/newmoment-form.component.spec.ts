import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmomentFormComponent } from './newmoment-form.component';

describe('NewmomentFormComponent', () => {
  let component: NewmomentFormComponent;
  let fixture: ComponentFixture<NewmomentFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewmomentFormComponent]
    });
    fixture = TestBed.createComponent(NewmomentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
