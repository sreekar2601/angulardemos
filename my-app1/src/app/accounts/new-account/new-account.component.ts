import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  accountAdded = new EventEmitter<{ name: string; status: string }>();

  onCreateAccount(accountName: string, status: string) {
    this.accountAdded.emit({
      name: accountName,
      status: status,
    });
    console.log('Account created...');
  }
}
