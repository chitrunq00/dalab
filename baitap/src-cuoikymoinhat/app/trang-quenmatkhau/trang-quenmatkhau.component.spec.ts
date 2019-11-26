import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangQuenmatkhauComponent } from './trang-quenmatkhau.component';

describe('TrangQuenmatkhauComponent', () => {
  let component: TrangQuenmatkhauComponent;
  let fixture: ComponentFixture<TrangQuenmatkhauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangQuenmatkhauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangQuenmatkhauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
