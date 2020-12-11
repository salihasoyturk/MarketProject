import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PsqlService } from 'src/app/psql.service';
import { StockComponent } from '../stock.component';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css'],
})
export class StockDetailsComponent implements OnInit {
  baseUrl = 'http://localhost:5000/branch';
  data2: any;
  branch_id: any;
  product_id: any;
  total_stock: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public stockComponent: StockComponent,
    public psqlService: PsqlService
  ) {}

  ngOnInit() {
    if (this.stockComponent.stokList) {
      this.psqlService.getProduct().subscribe((res) => {
        for (const stok of this.stockComponent.stokList) {
          const productName = res.data.find(
            (product) => product.product_id === stok.product_id
          );
          if (productName) {
            stok.product_name = productName.name;
          }
        }
        console.log(this.stockComponent.stokList);
      });
    }
  }
}
