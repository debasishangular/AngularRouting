import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedChid1Component } from './nested-chid1.component';

describe('NestedChid1Component', () => {
  let component: NestedChid1Component;
  let fixture: ComponentFixture<NestedChid1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedChid1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedChid1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
