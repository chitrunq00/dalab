import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangHoidapComponent } from './trang-hoidap.component';

describe('TrangHoidapComponent', () => {
  let component: TrangHoidapComponent;
  let fixture: ComponentFixture<TrangHoidapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangHoidapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangHoidapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
