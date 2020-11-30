import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface branchModel {
  success: boolean;
  data: Array<Object>;
}
export interface productModel {
  success: boolean;
  data: Array<Object>;
}

export interface stockModel {
  success: boolean;
  data: Array<Object>;
}

@Injectable({
  providedIn: 'root',
})
export class PsqlService {
  constructor(private httpClient: HttpClient) {}

  getBranch(): Observable<branchModel> {
    return this.httpClient.get<branchModel>(
      'http://localhost:5000/branch-table'
    );
  }
  getProduct(): Observable<productModel> {
    return this.httpClient.get<productModel>(
      'http://localhost:5000/product-table'
    );
  }
  getStock(): Observable<stockModel> {
    return this.httpClient.get<stockModel>('http://localhost:5000/stock-table');
  }
}

// export interface IBranch {
//   branch_id: number;
//   name: string;
//   location?: string;
// }
// export interface IProduct {
//   product_id: number;
//   name: string;
//   price?: number;
//   type?: string;
// }
// export interface IStock {
//   branch_id: number;
//   product_id: number;
//   total_stock: number;
// }

//   public getBranch{}(
//     return this.httpClient.get/'http://localhost'
//   )
// }
// const dataBranch: IBranch[] = [];
// const productData: IProduct[] = [];
// const stockData: IStock[] = []

// const request = this.httpClient
//   .get('http://localhost:5000/branch-table')
//   .pipe();
// request.subscribe((res) => {
//   console.log(res);
// });
