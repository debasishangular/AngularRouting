import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeCreateComponent } from '../../employee/employee-create/employee-create.component';

@Injectable({
  providedIn: 'root'
})
export class CreateEmployeeCanDeactivateGuardGuard implements CanDeactivate<EmployeeCreateComponent> {
  canDeactivate(component: EmployeeCreateComponent)
  : Observable<boolean> | Promise<boolean> | boolean {
    if (component.createEmployeeForm.dirty) {
      return confirm('Are you sure you want to discard your change?');
    } else {
return true;
    }
  }
}
