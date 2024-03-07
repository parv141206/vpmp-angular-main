import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrl: './customer-orders.component.css',
})
export class CustomerOrdersComponent {
  orders = [
    { id: 1, customerId: 1, amount: '$100' },
    { id: 2, customerId: 1, amount: '$200' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
