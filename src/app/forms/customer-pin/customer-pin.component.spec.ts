import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPinComponent } from './customer-pin.component';

describe('CustomerPinComponent', () => {
  let component: CustomerPinComponent;
  let fixture: ComponentFixture<CustomerPinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerPinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
