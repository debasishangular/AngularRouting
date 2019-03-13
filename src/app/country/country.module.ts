import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountrydetailComponent } from './countrydetail/countrydetail.component';
import { CountrylistComponent } from './countrylist/countrylist.component';
import { CountryRoutingModule } from './country-routing.module';
import { ShowcountryComponent } from './showcountry/showcountry.component';
import { BrowseComponent } from './pages/browse/browse.component';

@NgModule({
  declarations: [CountrydetailComponent, CountrylistComponent, ShowcountryComponent, BrowseComponent],
  imports: [
    CommonModule,
    CountryRoutingModule
  ]
})
export class CountryModule { }
