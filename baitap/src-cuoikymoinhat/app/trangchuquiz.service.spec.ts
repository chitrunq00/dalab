import { TestBed } from '@angular/core/testing';

import { TrangchuquizService } from './trangchuquiz.service';

describe('TrangchuquizService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrangchuquizService = TestBed.get(TrangchuquizService);
    expect(service).toBeTruthy();
  });
});
