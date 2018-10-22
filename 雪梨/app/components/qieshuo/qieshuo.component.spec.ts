import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QieshuoComponent } from './qieshuo.component';

describe('QieshuoComponent', () => {
  let component: QieshuoComponent;
  let fixture: ComponentFixture<QieshuoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QieshuoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QieshuoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
