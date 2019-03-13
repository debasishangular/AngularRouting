import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';

// Components
import { BookComponent } from './book/book.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { UpdatebooksComponent } from './updatebooks/updatebooks.component';

// Services
import { CustomPreloadingService } from './custom-preloading.service';




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
    path: '',
    component: AddbooksComponent,
    outlet: 'addBook'
  },
  {
    path: '',
    component: UpdatebooksComponent,
    outlet: 'updateBook'
  },
  {
    path: 'countries',
   loadChildren: './country/country.module#CountryModule'
     },
    //  {
    //   path: 'employees',
    //   loadChildren: './employee/employee.module#EmployeeModule'
    //  },
     {
      path: 'employees',
      data: { preload: true}, // this will be used to determine if we want a
                               // lazy loaded module to be preloaded
      loadChildren: './employee/employee.module#EmployeeModule'
     },
  { path: '**', redirectTo: '' }


];
// @NgModule({
//   imports: [RouterModule.forRoot(routes,
//     {preloadingStrategy: PreloadAllModules} // NoPreloading, PreloadAllModules
//    )],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}

//  { enableTracing: true }

// Custom Preloading Startegy

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {preloadingStrategy: CustomPreloadingService} // NoPreloading, PreloadAllModules
   )],
  exports: [RouterModule]
})

export class AppRoutingModule {}
