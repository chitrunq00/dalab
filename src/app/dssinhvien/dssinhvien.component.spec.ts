import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DssinhvienComponent } from './dssinhvien.component';

describe('DssinhvienComponent', () => {
  let component: DssinhvienComponent;
  let fixture: ComponentFixture<DssinhvienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DssinhvienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DssinhvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
