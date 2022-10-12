import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxIndexedDBService } from 'ngx-indexed-db';

import regionAPI from './country';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss'],
})
export class CreateCustomerComponent implements OnInit {
  addCustomerForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    region: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
  });

  regionList: any[] = Object.values(regionAPI.data)
    .map(({ region }) => region)
    .filter((v, i, a) => a.indexOf(v) === i);

  countryList: any = [];
  constructor(
    private _snackBar: MatSnackBar,
    private dbService: NgxIndexedDBService
  ) {}

  ngOnInit(): void {}

  onCustomerFormSubmit(form: any) {
    if (form.status === 'INVALID') {
      this._snackBar.open('Please fill Form', 'Error', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    } else {
      this.dbService
        .add('customer', {
          ...form.value,
        })
        .subscribe((key) => {
          this._snackBar.open('Customer created.', 'Success', {
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });

          this.addCustomerForm.reset();
        });
    }
  }

  regionOptionChange(ev: any) {
    if (ev[0] && ev[0].value) {
      this.countryList = Object.values(regionAPI.data)
        .filter(({ region }) => region === ev[0].value)
        .map(({ country }) => country);
    } else {
      this.countryList = [];
    }
  }
}
