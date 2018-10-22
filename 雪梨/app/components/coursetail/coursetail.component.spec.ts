import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursetailComponent } from './coursetail.component';

describe('CoursetailComponent', () => {
  let component: CoursetailComponent;
  let fixture: ComponentFixture<CoursetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
