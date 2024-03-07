import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-prac-10',
  templateUrl: './prac-10.component.html',
  styleUrls: ['./prac-10.component.css'],
})
export class Prac10Component {
  @Output() productAdded = new EventEmitter<any>();

  products = [
    { name: 'Product 1', price: '10' },
    { name: 'Product 2', price: '20' },
    { name: 'Product 3', price: '30' },
  ];

  addToCart(product: any): void {
    this.productAdded.emit(product);
  }
}
