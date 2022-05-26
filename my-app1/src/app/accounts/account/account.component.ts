import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  @Input()
  account: {
    name: string;
    status: string;
  };

  @Input()
  id: number = 0;

  @Output()
  statusChanged = new EventEmitter<{
    id: number;
    newStatus: string;
  }>();

  constructor() {}

  ngOnInit(): void {}
  changeStatus(status: string) {
    this.statusChanged.emit({ id: this.id, newStatus: status });
    console.log('Account status changed, new Status: ' + status);
  }
}
