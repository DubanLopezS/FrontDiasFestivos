import { TestBed } from '@angular/core/testing';

import { VerificarService } from './verificar.service';

describe('Verificar', () => {
  let service: VerificarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerificarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
