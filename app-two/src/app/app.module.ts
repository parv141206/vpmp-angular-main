import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Prac8Component } from './prac-8/prac-8.component';
import { P8q2Component } from './prac-8/p8q2/p8q2.component';
import { P8q1Component } from './prac-8/p8q1/p8q1.component';
import { Prac9Component } from './prac-9/prac-9.component';
import { P9q2Component } from './prac-9/p9q2/p9q2.component';
import { Prac10Component } from './prac-10/prac-10.component';
import { Prac11Component } from './prac-11/prac-11.component';
import { ProductDetailsComponent } from './prac-12/product-details/product-details.component';
import { ProductComponent } from './prac-12/product/product.component';
import { Prac13Component } from './prac-13/prac-13.component';
import { Prac14Component } from './prac-14/prac-14.component';
import { HttpClientModule } from '@angular/common/http';
import { Prac15Component } from './prac-15/prac-15.component';
import { Prac16Component } from './prac-16/prac-16.component';
import { LoginComponent } from './prac-17/login/login.component';
import { DashboardComponent } from './prac-17/dashboard/dashboard.component';
import { LogoutComponent } from './prac-17/logout/logout.component';

@NgModule({
  declarations: [AppComponent, Prac8Component, P8q2Component, P8q1Component, Prac9Component, P9q2Component, Prac10Component, Prac11Component, ProductDetailsComponent, ProductComponent, Prac13Component, Prac14Component, Prac15Component, Prac16Component, LoginComponent, DashboardComponent, LogoutComponent],
  imports: [BrowserModule,  AppRoutingModule, FormsModule , CommonModule , HttpClientModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
