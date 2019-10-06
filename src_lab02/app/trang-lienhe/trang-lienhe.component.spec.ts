import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangLienheComponent } from './trang-lienhe.component';

describe('TrangLienheComponent', () => {
  let component: TrangLienheComponent;
  let fixture: ComponentFixture<TrangLienheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangLienheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangLienheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
