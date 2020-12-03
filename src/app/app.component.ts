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
  modalOpenState = false;
  currentBranch: any;

  selectedBranch(item: any) {
    this.modalOpenState = true;
    this.currentBranch = item;
    console.log(item);
  }
  branchTableOpen(event: any) {
    this.branchTable = event;
  }
  productTableOpen(event: any) {
    this.productTable = event;
  }
  stockTableOpen(event: any) {
    this.stockTable = event;
  }
  updateModal() {
    this.modalOpenState = false;
  }
  closeModal() {
    this.modalOpenState = false;
  }
}
