import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YiwanchengComponent } from './yiwancheng.component';

describe('YiwanchengComponent', () => {
  let component: YiwanchengComponent;
  let fixture: ComponentFixture<YiwanchengComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YiwanchengComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YiwanchengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
