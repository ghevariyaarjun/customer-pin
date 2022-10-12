import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FileUploader } from 'ng2-file-upload';
import { NgxIndexedDBService } from 'ngx-indexed-db';

// const URL = '/api/';
const URL = 'http://localhost:3000/api/';

@Component({
  selector: 'app-customer-pin',
  templateUrl: './customer-pin.component.html',
  styleUrls: ['./customer-pin.component.scss'],
})
export class CustomerPinComponent {
  addCustomerPinForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    image: new FormControl(
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Temp_plate.svg/1280px-Temp_plate.svg.png',
      [Validators.required]
    ),
    collaboratoryList: new FormControl('', [Validators.required]),
    privacy: new FormControl('Private', [Validators.required]),
  });

  uploader: FileUploader;
  hasBaseDropZoneOver: boolean;
  hasAnotherDropZoneOver: boolean;
  response: string;

  collaboratorsList: any = [];

  constructor(
    private dbService: NgxIndexedDBService,
    private _snackBar: MatSnackBar
  ) {
    this.dbService.getAll('customer').subscribe((peoples) => {
      this.collaboratorsList = peoples;
    });

    this.uploader = new FileUploader({
      url: URL,
      disableMultipart: true, // 'DisableMultipart' must be 'true' for formatDataFunction to be called.
      formatDataFunctionIsAsync: true,
      formatDataFunction: async (item: any) => {
        return new Promise((resolve, reject) => {
          resolve({
            name: item._file.name,
            length: item._file.size,
            contentType: item._file.type,
            date: new Date(),
          });
        });
      },
    });

    this.hasBaseDropZoneOver = false;
    this.hasAnotherDropZoneOver = false;

    this.response = '';

    this.uploader.response.subscribe((res) =>
      this.addCustomerPinForm.patchValue({ image: res })
    );
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  onCustomerPinSubmit(form: any) {
    if (form.status === 'INVALID') {
      if (form.value.image) {
        this._snackBar.open('Please fill Form', 'Error', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      } else {
        this._snackBar.open('Image Missing', 'Error', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }
    } else {
      this.dbService
        .add('pin', {
          ...form.value,
        })
        .subscribe((key) => {
          this._snackBar.open('Customer Pin created.', 'Success', {
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });

          this.addCustomerPinForm.reset();
        });
    }
  }

  fileSelected(ev: any) {
    console.log(ev);
  }
}
