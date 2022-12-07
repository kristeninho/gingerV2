import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaisteTeenusedComponent } from './naiste-teenused.component';

describe('NaisteTeenusedComponent', () => {
  let component: NaisteTeenusedComponent;
  let fixture: ComponentFixture<NaisteTeenusedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaisteTeenusedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaisteTeenusedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
