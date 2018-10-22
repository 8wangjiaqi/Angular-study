import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YiwanjieComponent } from './yiwanjie.component';

describe('YiwanjieComponent', () => {
  let component: YiwanjieComponent;
  let fixture: ComponentFixture<YiwanjieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YiwanjieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YiwanjieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
