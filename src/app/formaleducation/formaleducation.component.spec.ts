import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaleducationComponent } from './formaleducation.component';

describe('FormaleducationComponent', () => {
  let component: FormaleducationComponent;
  let fixture: ComponentFixture<FormaleducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormaleducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormaleducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
