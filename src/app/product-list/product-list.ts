import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {

  products: Product[] = [
    { id: 1, name: 'Laptop', price: 55000, inStock: true },
    { id: 2, name: 'Smartphone', price: 25000, inStock: true },
    { id: 3, name: 'Headphones', price: 2500, inStock: false },
    { id: 4, name: 'Smart Watch', price: 4500, inStock: true },
    { id: 5, name: 'Keyboard', price: 1500, inStock: false }
  ];

}