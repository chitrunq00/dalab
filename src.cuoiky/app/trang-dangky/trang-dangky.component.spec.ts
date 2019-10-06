import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangDangkyComponent } from './trang-dangky.component';

describe('TrangDangkyComponent', () => {
  let component: TrangDangkyComponent;
  let fixture: ComponentFixture<TrangDangkyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangDangkyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangDangkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
