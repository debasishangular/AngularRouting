import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcountryComponent } from './showcountry.component';

describe('ShowcountryComponent', () => {
  let component: ShowcountryComponent;
  let fixture: ComponentFixture<ShowcountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
