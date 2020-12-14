import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface newData {
  name: string;
  location: string;
}
export interface branchModel {
  success: boolean;
  data: Branch[];
}
export interface productModel {
  success: boolean;
  data: Product[];
}

interface Branch {
  name: string;
  branch_id: number;
  location: string;
}
interface Product {
  name: string;
  product_id: number;
  type: string;
  price: string;
}

export interface stockModel {
  success: boolean;
  data: Array<Object>;
}
let baseUrl = 'http://localhost:5000';

@Injectable({
  providedIn: 'root',
})
export class PsqlService {
  data2: any;

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
  getStock(): Observable<branchModel> {
    return this.httpClient.get<branchModel>(
      'http://localhost:5000/branch-table'
    );
  }
  getStockTotal(): Observable<stockModel> {
    return this.httpClient.get<stockModel>('http://localhost:5000/stock-table');
  }

  deleteBranch(data2: any): Observable<branchModel> {
    return this.httpClient.delete<branchModel>(
      `${baseUrl}/${data2.tableName}/${data2.columnName}/${data2.branch_id}`
    );

    // this.httpClient.delete(`${baseUrl}/${id}`);
  }
  getBranchByID(id: any): Observable<stockModel> {
    return this.httpClient.get<stockModel>(
      `http://localhost:5000/branch/${id}/stock`
    );
  }
  getProductByID(id: any): Observable<stockModel> {
    return this.httpClient.get<stockModel>(
      `http://localhost:5000/product/${id}/stock`
    );
  }

  //SERVER'LA BAĞLANTILI UPDATE KISMI
  updateBranch(data2: any): Observable<branchModel> {
    const body = {
      name: data2.name,
      location: data2.location,
    };
    return this.httpClient.post<branchModel>(
      'http://localhost:5000/branch/' + data2.branch_id,
      body
    );
  }
  addNewBranch(newData: newData): Observable<branchModel> {
    const body = {
      name: newData.name,
      location: newData.location,
    };
    console.log(' newData geliyor');
    return this.httpClient.post<branchModel>(
      'http://localhost:5000/branch/',
      body
    );
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
