import { TestBed } from '@angular/core/testing';

import { FestivoService } from './festivo.service';

describe('Festivo', () => {
  let service: FestivoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FestivoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
