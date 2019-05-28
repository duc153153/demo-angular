import { TestBed } from '@angular/core/testing';

import { SecretProductService } from './secret-product.service';

describe('SecretProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SecretProductService = TestBed.get(SecretProductService);
    expect(service).toBeTruthy();
  });
});
