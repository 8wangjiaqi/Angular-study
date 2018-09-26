import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child011Component } from './child011.component';

describe('Child011Component', () => {
  let component: Child011Component;
  let fixture: ComponentFixture<Child011Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child011Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
