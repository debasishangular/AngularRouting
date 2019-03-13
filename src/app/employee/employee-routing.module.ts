import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { CreateEmployeeCanDeactivateGuardGuard } from '../guards/canDeactivate/create-employee-can-deactivate-guard.guard';

const employeeRoutes: Routes = [
  {
    path: '', // componentless Route
    children: [
      {
        path: '',
        component: BrowseComponent,
        children: [
          {
            path: 'createEmployee',
            component: EmployeeCreateComponent,
            canDeactivate: [CreateEmployeeCanDeactivateGuardGuard]
          },
          {
            path: 'employeeList',
            component: EmployeeListComponent
          },
          {
            path: 'employeeDetail',
            component: EmployeeDetailComponent
          }
        ]
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(employeeRoutes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
