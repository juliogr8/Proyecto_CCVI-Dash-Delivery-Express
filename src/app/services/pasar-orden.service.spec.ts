import { TestBed } from '@angular/core/testing';

import { PasarOrdenService } from './pasar-orden.service';

describe('PasarOrdenService', () => {
  let service: PasarOrdenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasarOrdenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
