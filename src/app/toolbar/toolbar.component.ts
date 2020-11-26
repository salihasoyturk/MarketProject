import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  host = 'http://localhost:5000/';
  rowData = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.openBranch();
    this.openProduct();
    this.openStock();
  }

  openBranch() {
    const request = this.httpClient.get('http://localhost:5000/branch').pipe();
    request.subscribe((res) => {
      console.log(res);
    });
  }

  openProduct() {
    const request = this.httpClient.get('http://localhost:5000/product').pipe();
    request.subscribe((res) => {
      console.log(res);
    });
  }

  openStock() {
    const request = this.httpClient.get('http://localhost:5000/stock' ).pipe();
    request.subscribe((res) => {
      console.log(res);
    });
  }
}
