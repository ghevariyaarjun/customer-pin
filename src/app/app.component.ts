import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { CreateCustomerComponent } from './forms/create-customer/create-customer.component';
import { CustomerPinComponent } from './forms/customer-pin/customer-pin.component';

export interface PeriodicElement {
  image: string;
  title: number;
  collaboratoryList: number[];
  privacy: 'Public' | 'Private';
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  displayedColumns: string[] = [
    'title',
    'image',
    'collaboratoryList',
    'privacy',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  customerObj: any = {};
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private dbService: NgxIndexedDBService
  ) {
    this.reloadForm();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openAddCustomerDialog() {
    const dialogRef = this.dialog.open(CreateCustomerComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`openAddCustomerDialog result: ${result}`);
      this.reloadForm();
    });
  }

  openAddPinDialog() {
    const dialogRef = this.dialog.open(CustomerPinComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`openAddCustomerDialog result: ${result}`);
      this.reloadForm();
    });
  }

  reloadForm() {
    this.dbService.getAll('customer').subscribe((customers) => {
      this.customerObj = {};

      customers.filter((customer: any) => {
        this.customerObj[customer.id] = customer;
      });
    });

    this.dbService.getAll('pin').subscribe((pins: any) => {
      this.dataSource = new MatTableDataSource<PeriodicElement>(pins);
    });
  }
}
