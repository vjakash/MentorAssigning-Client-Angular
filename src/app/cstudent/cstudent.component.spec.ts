import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CstudentComponent } from './cstudent.component';

describe('CstudentComponent', () => {
  let component: CstudentComponent;
  let fixture: ComponentFixture<CstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
