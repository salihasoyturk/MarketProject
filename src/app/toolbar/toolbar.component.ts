import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PsqlService } from '../psql.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  public get psqlService(): PsqlService {
    return this._psqlService;
  }
  public set psqlService(value: PsqlService) {
    this._psqlService = value;
  }
  host = 'http://localhost:5000/';
  data?: any;
  branchData: any;


  constructor(private httpClient: HttpClient, private _psqlService: PsqlService) {
    // this.onBranch();
    // this.onProduct();
    // this.onStock();
  }

  ngOnInit(): void {
    this.branchData = this.psqlService.branchData;
  }

  onBranch(): void {
    const request = this.httpClient.get('http://localhost:5000/branch').pipe();
    request.subscribe((res) => {
      console.log(res);

    });
  }

  onProduct(): void {
    const request = this.httpClient.get('http://localhost:5000/product').pipe();
    request.subscribe((res) => {
      console.log(res);
    });
  }

  onStock(): void {
    const request = this.httpClient.get('http://localhost:5000/stock').pipe();
    request.subscribe((res) => {
      console.log(res);
    });
  }
}
