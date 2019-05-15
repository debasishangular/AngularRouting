import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { AppRoutingModule } from './app-routing.module';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { UpdatebooksComponent } from './updatebooks/updatebooks.component';
import { BrowseComponent } from './book/pages/browse/browse.component';
import { NestedChid1Component } from './addbooks/nested-chid1/nested-chid1.component';
import { NestedChid2Component } from './addbooks/nested-chid2/nested-chid2.component';


 // Modules
 // import { CountryModule } from './country/country.module';
 // import { EmployeeModule } from './employee/employee.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // CountryModule,
    // EmployeeModule

  ],
  declarations: [
    AppComponent,
    BookComponent,
    AddbooksComponent,
    UpdatebooksComponent,
    BrowseComponent,
    NestedChid1Component,
    NestedChid2Component
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
