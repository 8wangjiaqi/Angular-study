import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TongzhiComponent } from './tongzhi.component';

describe('TongzhiComponent', () => {
  let component: TongzhiComponent;
  let fixture: ComponentFixture<TongzhiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TongzhiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TongzhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
