import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KechengComponent } from './kecheng.component';

describe('KechengComponent', () => {
  let component: KechengComponent;
  let fixture: ComponentFixture<KechengComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KechengComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KechengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
