/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductsResolveService } from './products-resolve.service';

describe('Service: ProductsResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsResolveService]
    });
  });

  it('should ...', inject([ProductsResolveService], (service: ProductsResolveService) => {
    expect(service).toBeTruthy();
  }));
});
