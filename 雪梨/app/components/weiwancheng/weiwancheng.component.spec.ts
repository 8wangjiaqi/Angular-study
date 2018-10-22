import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeiwanchengComponent } from './weiwancheng.component';

describe('WeiwanchengComponent', () => {
  let component: WeiwanchengComponent;
  let fixture: ComponentFixture<WeiwanchengComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeiwanchengComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeiwanchengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
