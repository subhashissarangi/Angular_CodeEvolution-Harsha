import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {AppRoutingModule,RoutingModuleComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {EmployeeDetailsComponent} from './employees/employee-details.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { PageNotFoundComponent } from './error-pages/page-not-found.component';
import { ListEmployeeComponent } from './employees/list-employee.component';
import { RouterModule } from "@angular/router";
import { FormsModule }   from '@angular/forms';
//import { FormsModule,FormControl, FormGroup, FormBuilder }   from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    RoutingModuleComponents,
    CreateEmployeeComponent,
    PageNotFoundComponent,
    ListEmployeeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
