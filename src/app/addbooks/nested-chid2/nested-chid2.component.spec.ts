import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedChid2Component } from './nested-chid2.component';

describe('NestedChid2Component', () => {
  let component: NestedChid2Component;
  let fixture: ComponentFixture<NestedChid2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedChid2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedChid2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
