import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';

// Components
import { BookComponent } from './book/book.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { UpdatebooksComponent } from './updatebooks/updatebooks.component';

// Services
import { CustomPreloadingService } from './custom-preloading.service';
import { NestedChid1Component } from './addbooks/nested-chid1/nested-chid1.component';
import { NestedChid2Component } from './addbooks/nested-chid2/nested-chid2.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'book',
    pathMatch: 'full'
  },
  {
    path: 'book',
    component: BookComponent
  },
  {
    path: 'bookAdd',
    component: AddbooksComponent,
    outlet: 'addBook',
    children: [
      {path: '', redirectTo: 'nested1', pathMatch: 'full'},
      {path: 'nested1', component: NestedChid1Component},
      {path: 'nested2', component: NestedChid2Component}
    ]
  },
  {
    path: 'bookUpdate',
    component: UpdatebooksComponent,
    outlet: 'updateBook'
  },
  {
    path: 'countries',
   loadChildren: './country/country.module#CountryModule'
     },
     {
      path: 'employees',
      loadChildren: './employee/employee.module#EmployeeModule',
      },
    //  {
    //   path: 'employees',
    //   data: { preload: true}, // this will be used to determine if we want a
    //                            // lazy loaded module to be preloaded
    //   loadChildren: './employee/employee.module#EmployeeModule'
    //  },
  { path: '**', redirectTo: '' }


];

/*Loading all the Modules onDemand - Lazy Loading*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


/*Load all the Modules when application gets loaded.-Eager Loading */

// @NgModule({
//   imports: [RouterModule.forRoot(routes,
//     {preloadingStrategy: PreloadAllModules}
//    )],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}


// Custom Preloading Startegy-Preload Modules
/*
   if you want to enable the custom preloading Strategy then also enable the
   route with path "emplyoees" and data: { preload: true},disable the route 
   "employees" not having data: { preload: true}
*/ 

// @NgModule({
//   imports: [RouterModule.forRoot(routes,
//     {preloadingStrategy: CustomPreloadingService} // NoPreloading, PreloadAllModules
//    )],
//   exports: [RouterModule]
// })

// export class AppRoutingModule {}
