import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangThitracnghienComponent } from './trang-thitracnghien.component';

describe('TrangThitracnghienComponent', () => {
  let component: TrangThitracnghienComponent;
  let fixture: ComponentFixture<TrangThitracnghienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangThitracnghienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangThitracnghienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
