import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CreateCustomerComponent } from './create-customer.component'

import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
    imports:      [ CommonModule , FormsModule, MatDialogModule],
    declarations: [ CreateCustomerComponent  ],
    exports:      [ CreateCustomerComponent  ]
   })
   export class CreateCustomerComponentModule { }

