import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeenusedComponent } from './teenused.component';

describe('TeenusedComponent', () => {
  let component: TeenusedComponent;
  let fixture: ComponentFixture<TeenusedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeenusedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeenusedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
