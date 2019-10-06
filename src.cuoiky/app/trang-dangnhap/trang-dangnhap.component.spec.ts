import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangDangnhapComponent } from './trang-dangnhap.component';

describe('TrangDangnhapComponent', () => {
  let component: TrangDangnhapComponent;
  let fixture: ComponentFixture<TrangDangnhapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangDangnhapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangDangnhapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
