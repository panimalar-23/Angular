import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  template: `
    <h1>Welcome to Our E-Commerce Store</h1>
    <app-product-list></app-product-list>
  `,
  styleUrl: './app.css'
})
export class App {
}