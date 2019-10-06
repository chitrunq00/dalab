import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangDanhmucmonhocComponent } from './trang-danhmucmonhoc.component';

describe('TrangDanhmucmonhocComponent', () => {
  let component: TrangDanhmucmonhocComponent;
  let fixture: ComponentFixture<TrangDanhmucmonhocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangDanhmucmonhocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangDanhmucmonhocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
