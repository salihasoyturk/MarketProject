import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PsqlService } from '../psql.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  @Output() openBranchTable: EventEmitter<any> = new EventEmitter();
  @Output() openProductTable: EventEmitter<any> = new EventEmitter();
  @Output() openStockTable: EventEmitter<any> = new EventEmitter();

  constructor(
    private httpClient: HttpClient,
    private psqlService: PsqlService
  ) {}

  ngOnInit(): void {}

  openBranch(): void {
    this.openBranchTable.emit(true);
  }

  openProduct(): void {
    this.openProductTable.emit(true);
  }

  openStock(): void {
    this.openStockTable.emit(true);
  }
}

// const request = this.httpClient
// .get('http://localhost:5000/product-table')
// .pipe();
// request.subscribe((res) => {
// console.log(res);
// });

// const request = this.httpClient
//       .get('http://localhost:5000/stock-table')
//       .pipe();
//     request.subscribe((res) => {
//       console.log(res);
//     });
