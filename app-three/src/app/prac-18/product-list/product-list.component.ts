import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  products = [
    { id: 1, name: 'Product 1', price: '10' },
    { id: 2, name: 'Product 2', price: '20' },
    { id: 3, name: 'Product 3', price: '30' },
    { id: 4, name: 'Product 4', price: '40' },
    { id: 5, name: 'Product 5', price: '50' },
    { id: 6, name: 'Product 6', price: '60' },
  ];
  currentPage = 1;
  itemsPerPage = 5;

  constructor() {}

  ngOnInit(): void {}

  get displayedProducts() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.products.slice(start, end);
  }

  nextPage() {
    if (this.currentPage * this.itemsPerPage < this.products.length) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
