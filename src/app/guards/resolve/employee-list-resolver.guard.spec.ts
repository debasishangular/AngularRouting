import { TestBed, async, inject } from '@angular/core/testing';

import { EmployeeListResolverGuard } from './employee-list-resolver.guard';

describe('EmployeeListResolverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeListResolverGuard]
    });
  });

  it('should ...', inject([EmployeeListResolverGuard], (guard: EmployeeListResolverGuard) => {
    expect(guard).toBeTruthy();
  }));
});
