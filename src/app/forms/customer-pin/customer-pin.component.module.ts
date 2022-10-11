import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { CustomerPinComponent } from './customer-pin.component';

import { MatInputModule } from '@angular/material/input';

import { NgxSelectModule } from 'ngx-select-ex';

import { FileUploadModule } from 'ng2-file-upload';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    NgxSelectModule,
    FileUploadModule,
    MatRadioModule,
  ],
  declarations: [CustomerPinComponent],
  exports: [CustomerPinComponent],
})
export class CustomerPinComponentModule {}
