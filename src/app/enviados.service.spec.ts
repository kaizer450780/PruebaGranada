import { TestBed } from '@angular/core/testing';

import { EnviadosService } from './enviados.service';

describe('EnviadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnviadosService = TestBed.get(EnviadosService);
    expect(service).toBeTruthy();
  });
});
