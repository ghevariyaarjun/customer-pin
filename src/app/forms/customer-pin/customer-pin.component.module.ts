import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {MatDialogModule} from '@angular/material/dialog';
import { CustomerPinComponent } from './customer-pin.component';


@NgModule({
    imports:      [ CommonModule , FormsModule, MatDialogModule],
    declarations: [ CustomerPinComponent  ],
    exports:      [ CustomerPinComponent  ]
   })
   export class CustomerPinComponentModule { }

