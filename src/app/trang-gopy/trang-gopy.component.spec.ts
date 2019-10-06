import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangGopyComponent } from './trang-gopy.component';

describe('TrangGopyComponent', () => {
  let component: TrangGopyComponent;
  let fixture: ComponentFixture<TrangGopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangGopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangGopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
