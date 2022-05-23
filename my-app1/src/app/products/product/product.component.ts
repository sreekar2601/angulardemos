import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input()
  productname: {
    name: String;
    stock: Number;
    status: String;
  };

  constructor() {}

  ngOnInit(): void {}
}
