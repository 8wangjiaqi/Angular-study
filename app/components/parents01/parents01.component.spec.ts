import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Parents01Component } from './parents01.component';

describe('Parents01Component', () => {
  let component: Parents01Component;
  let fixture: ComponentFixture<Parents01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parents01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Parents01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
