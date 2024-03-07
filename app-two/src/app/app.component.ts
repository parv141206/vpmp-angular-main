import { Component } from '@angular/core';

interface Product {
  name: string;
  price: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  addedItems: Product[] = [];

  selectedProductId: number | undefined;
  onProductAdded(product: Product): void {
    this.addedItems.push(product);
  }
}
