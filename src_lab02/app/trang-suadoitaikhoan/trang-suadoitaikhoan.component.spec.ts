import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangSuadoitaikhoanComponent } from './trang-suadoitaikhoan.component';

describe('TrangSuadoitaikhoanComponent', () => {
  let component: TrangSuadoitaikhoanComponent;
  let fixture: ComponentFixture<TrangSuadoitaikhoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangSuadoitaikhoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangSuadoitaikhoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
