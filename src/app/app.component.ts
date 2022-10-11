import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { CreateCustomerComponent } from './forms/create-customer/create-customer.component';
import { CustomerPinComponent } from './forms/customer-pin/customer-pin.component';

export interface PeriodicElement {
  image: string;
  title: number;
  collaboratory: number;
  privacy: 'Public' | 'Private';
}

const ELEMENT_DATA: PeriodicElement[] = [
  {title: 1, image: 'Hydrogen', collaboratory: 1.0079, privacy: 'Public'},
  {title: 2, image: 'Helium', collaboratory: 4.0026, privacy: 'Public'},
  {title: 3, image: 'Lithium', collaboratory: 6.941, privacy: 'Public'},
  {title: 4, image: 'Beryllium', collaboratory: 9.0122, privacy: 'Public'},
  {title: 5, image: 'Boron', collaboratory: 10.811, privacy: 'Public'},
  {title: 6, image: 'Carbon', collaboratory: 12.0107, privacy: 'Public'},
  {title: 7, image: 'Nitrogen', collaboratory: 14.0067, privacy: 'Public'},
  {title: 8, image: 'Oxygen', collaboratory: 15.9994, privacy: 'Public'},
  {title: 9, image: 'Fluorine', collaboratory: 18.9984, privacy: 'Public'},
  {title: 10, image: 'Neon', collaboratory: 20.1797, privacy: 'Public'},
  {title: 11, image: 'Sodium', collaboratory: 22.9897, privacy: 'Public'},
  {title: 12, image: 'Magnesium', collaboratory: 24.305, privacy: 'Public'},
  {title: 13, image: 'Aluminum', collaboratory: 26.9815, privacy: 'Public'},
  {title: 14, image: 'Silicon', collaboratory: 28.0855, privacy: 'Public'},
  {title: 15, image: 'Phosphorus', collaboratory: 30.9738, privacy: 'Public'},
  {title: 16, image: 'Sulfur', collaboratory: 32.065, privacy: 'Public'},
  {title: 17, image: 'Chlorine', collaboratory: 35.453, privacy: 'Public'},
  {title: 18, image: 'Argon', collaboratory: 39.948, privacy: 'Public'},
  {title: 19, image: 'Potassium', collaboratory: 39.0983, privacy: 'Public'},
  {title: 20, image: 'Calcium', collaboratory: 40.078, privacy: 'Public'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayedColumns: string[] = ['title', 'image', 'collaboratory', 'privacy'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openAddCustomerDialog() {
    const dialogRef = this.dialog.open(CreateCustomerComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`openAddCustomerDialog result: ${result}`);
    });
  }

  openAddPinDialog() {
    const dialogRef = this.dialog.open(CustomerPinComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`openAddCustomerDialog result: ${result}`);
    });
  }

}
