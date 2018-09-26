import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child012Component } from './child012.component';

describe('Child012Component', () => {
  let component: Child012Component;
  let fixture: ComponentFixture<Child012Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child012Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
