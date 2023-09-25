/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CategoriesResolveService } from './categories-resolve.service';

describe('Service: CategoriesResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoriesResolveService]
    });
  });

  it('should ...', inject([CategoriesResolveService], (service: CategoriesResolveService) => {
    expect(service).toBeTruthy();
  }));
});
