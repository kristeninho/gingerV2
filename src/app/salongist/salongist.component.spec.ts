import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalongistComponent } from './salongist.component';

describe('SalongistComponent', () => {
  let component: SalongistComponent;
  let fixture: ComponentFixture<SalongistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalongistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalongistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
