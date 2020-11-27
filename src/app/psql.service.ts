import { Injectable } from '@angular/core';
export interface IBranch {
  branch_id?: number,
  name?: string,
  location?: string
}
export interface IProduct {
  product_id?: number,
  name?: string,
  price?: number,
  type?: string
}
export interface IStock {
  branch_id?: number,
  product_id?: number,
  total_stock?: number
}
@Injectable({
  providedIn: 'root',
})
export class PsqlService {
  constructor() {}
  branchData: IBranch[] = [];
  productData: IProduct[] = [];
  stockData: IStock[] = [];
}
