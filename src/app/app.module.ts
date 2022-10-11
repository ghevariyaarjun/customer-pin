import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateCustomerComponentModule } from './forms/create-customer/create-customer.component.module';
import {MatDialogModule} from '@angular/material/dialog';
import { CustomerPinComponentModule } from './forms/customer-pin/customer-pin.component.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatDialogModule,
    CreateCustomerComponentModule,
    CustomerPinComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
