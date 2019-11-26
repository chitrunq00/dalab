import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangDoimatkhauComponent } from './trang-doimatkhau.component';

describe('TrangDoimatkhauComponent', () => {
  let component: TrangDoimatkhauComponent;
  let fixture: ComponentFixture<TrangDoimatkhauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangDoimatkhauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangDoimatkhauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
