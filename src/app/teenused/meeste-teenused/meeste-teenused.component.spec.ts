import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeesteTeenusedComponent } from './meeste-teenused.component';

describe('MeesteTeenusedComponent', () => {
  let component: MeesteTeenusedComponent;
  let fixture: ComponentFixture<MeesteTeenusedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeesteTeenusedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeesteTeenusedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
