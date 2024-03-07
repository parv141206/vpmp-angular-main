import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './prac-18/product-list/product-list.component';
import { CustomerOrdersComponent } from './prac-19/customer-orders/customer-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CustomerOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
