import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Market Project';

  branchTable = false;
  productTable = false;
  stockTable = false;

  constructor() {}

  branchTableOpen(event: any) {
    this.branchTable = event;
  }
  productTableOpen(event: any) {
    this.productTable = event;
  }
  stockTableOpen(event: any) {
    this.stockTable = event;
  }
}
