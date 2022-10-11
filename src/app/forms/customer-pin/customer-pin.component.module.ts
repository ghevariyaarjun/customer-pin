import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { CustomerPinComponent } from './customer-pin.component';

import { MatInputModule } from '@angular/material/input';

import { NgxSelectModule } from 'ngx-select-ex';

import { FileUploadModule } from 'ng2-file-upload';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    NgxSelectModule,
    FileUploadModule
  ],
  declarations: [CustomerPinComponent],
  exports: [CustomerPinComponent],
})
export class CustomerPinComponentModule {}
