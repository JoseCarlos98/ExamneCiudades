import { TestBed } from '@angular/core/testing';

import { ApiCiudades } from './api-ciudades.service';

describe('ApiCiudades', () => {
  let service: ApiCiudades;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCiudades);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
