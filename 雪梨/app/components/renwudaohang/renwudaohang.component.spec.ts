import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenwudaohangComponent } from './renwudaohang.component';

describe('RenwudaohangComponent', () => {
  let component: RenwudaohangComponent;
  let fixture: ComponentFixture<RenwudaohangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenwudaohangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenwudaohangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
