import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  productname = '';
  productstock;
  @Output()
  productadded = new EventEmitter<{
    productname: String;
    productstock: number;
    availability: string;
  }>();

  constructor() {}

  ngOnInit(): void {}

  onaddproduct() {
    this.productadded.emit({
      productname: this.productname,
      availability: this.productstock > 0 ? 'available' : 'not available',
      productstock: this.productstock,
    });
    this.productname = '';
    this.productstock = '';
  }
}
