import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateCustomerComponent } from './create-customer.component';

import { MatDialogModule } from '@angular/material/dialog';

import { MatInputModule } from '@angular/material/input';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxSelectModule } from 'ngx-select-ex';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    NgxSelectModule,
    MatSnackBarModule,
  ],
  declarations: [CreateCustomerComponent],
  exports: [CreateCustomerComponent],
})
export class CreateCustomerComponentModule {}
