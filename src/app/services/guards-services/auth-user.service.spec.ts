/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthUserGuard } from './auth-user.service';

describe('Service: AuthUser', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthUserGuard]
    });
  });

  it('should ...', inject([AuthUserGuard], (service: AuthUserGuard) => {
    expect(service).toBeTruthy();
  }));
});
