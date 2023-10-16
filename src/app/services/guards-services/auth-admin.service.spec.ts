/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthAdminGuard,  } from './auth-admin.service';

describe('Service: AuthAdmin', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthAdminGuard]
    });
  });

  it('should ...', inject([AuthAdminGuard], (service: AuthAdminGuard) => {
    expect(service).toBeTruthy();
  }));
});
