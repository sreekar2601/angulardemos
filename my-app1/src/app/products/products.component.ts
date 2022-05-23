import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products = [
    {
      name: 'laptop',
      stock: 200,
      status: 'available',
    },

    {
      name: 'Phone',
      stock: 100,
      status: 'available',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onproductadded(data) {
    this.products.push({
      name: data.productname,
      stock: data.productstock,
      status: data.availability,
    });
  }
}
