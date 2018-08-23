import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule, RoutingComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {EmployeeManagerDetailsService} from './employee-manager-details.service';
//import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
//import { ManagerDetailsComponent } from './manager-details/manager-details.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ErrorPageComponent} from './error-page/error-page.component';
import {PageNotFoundComponent } from './error-page/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents, // Array declared in app-routing.module so that multiple imports are not required
    ErrorPageComponent,
    PageNotFoundComponent
    //EmployeeDetailsComponent,
    //ManagerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeManagerDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
