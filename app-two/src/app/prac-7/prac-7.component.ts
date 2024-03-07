import { Component } from '@angular/core';
export class Product {
  id: number;
  name: string;
  purchaseDate: Date;
  price: number;
  image: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.purchaseDate = new Date();
    this.price = 0;
    this.image = '';
  }
}
@Component({
  selector: 'app-prac-7',
  templateUrl: './prac-7.component.html',
  styleUrl: './prac-7.component.css',
})

export class Prac7Component {
  searchInput: string = '';
  searchTerm: string = '';
  products: Product[] = [
    {
      id: 1,
      name: 'Football',
      purchaseDate: new Date('2020-01-01'),
      price: 799,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Chess Set',
      purchaseDate: new Date('2020-02-01'),
      price: 899,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Cricket Ball',
      purchaseDate: new Date('2020-03-01'),
      price: 79,
      image: 'https://via.placeholder.com/150',
    },
  ];
  performSearch() {
    this.searchTerm = this.searchInput;
  }
}
