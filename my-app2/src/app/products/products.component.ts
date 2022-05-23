import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  allownewproduct = true;
  productcreationstatus = 'product is not created';
  productname = '';
  productdescription = 'Default Description';
  username = '';
  adduser = true;
  userstatus = 'user not created';

  constructor() {}

  ngOnInit(): void {}
  onproductcreate() {
    this.productcreationstatus = 'Product Was Created';
  }

  onupdateproduct(event: any) {
    this.productname = event.target.value;
  }

  onusercreate() {
    this.userstatus = this.username + ' is created';
  }
}
