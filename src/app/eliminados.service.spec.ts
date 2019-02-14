import { TestBed } from '@angular/core/testing';

import { EliminadosService } from './eliminados.service';

describe('EliminadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EliminadosService = TestBed.get(EliminadosService);
    expect(service).toBeTruthy();
  });
});
