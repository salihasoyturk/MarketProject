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
    this.psqlService.getStockTotal().subscribe((res) => {
      if (res && res.success) {
        this.data2 = res.data;
      }
      console.log();
    });
  }
}
