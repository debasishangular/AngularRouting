import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListResolverGuard implements Resolve<Employee[]> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee[]> {
return null;
  }
}
