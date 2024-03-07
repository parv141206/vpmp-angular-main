import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

class Product {
  id: number = 0;
  name: string = '';
}
@Component({
  selector: 'app-p6q2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './p6q2.component.html',
  styleUrl: './p6q2.component.css',
})
export class P6q2Component {
  products: Product[] = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
    { id: 4, name: 'Dates' },
  ];

  removeProduct(productId: number) {
    const productIndex = this.products.findIndex(
      (product) => product.id === productId
    );
    if (productIndex > -1 && productIndex < this.products.length - 1) {
      this.products.splice(productIndex, 2);
    } else {
      this.products = this.products.filter(
        (product) => product.id !== productId
      );
    }
  }
}
