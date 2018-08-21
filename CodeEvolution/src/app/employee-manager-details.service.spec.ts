import { TestBed, inject } from '@angular/core/testing';

import { EmployeeManagerDetailsService } from './employee-manager-details.service';

describe('EmployeeManagerDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeManagerDetailsService]
    });
  });

  it('should be created', inject([EmployeeManagerDetailsService], (service: EmployeeManagerDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
