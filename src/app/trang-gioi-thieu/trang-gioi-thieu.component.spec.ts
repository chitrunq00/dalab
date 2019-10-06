import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangGioiThieuComponent } from './trang-gioi-thieu.component';

describe('TrangGioiThieuComponent', () => {
  let component: TrangGioiThieuComponent;
  let fixture: ComponentFixture<TrangGioiThieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangGioiThieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangGioiThieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
