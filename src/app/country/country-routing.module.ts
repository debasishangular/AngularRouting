import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountrydetailComponent } from './countrydetail/countrydetail.component';
import { CountrylistComponent } from './countrylist/countrylist.component';
import { ShowcountryComponent } from './showcountry/showcountry.component';
import { BrowseComponent } from './pages/browse/browse.component';

const countryRoutes: Routes = [
  {
    path: '', // componentless Route
    children: [
      {
        path: '',
        component: ShowcountryComponent,
        children: [
          {
            path: 'countryList',
            component: CountrylistComponent
          },
          {
            path: 'countryDetail',
            component: CountrydetailComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(countryRoutes)],
  exports: [RouterModule]
})
export class CountryRoutingModule {}
