import { Component, OnInit } from '@angular/core';
import { PsqlService } from '../psql.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
})
export class StockComponent implements OnInit {
  data2: any;
  constructor(private psqlService: PsqlService) {}

  ngOnInit(): void {
    this.psqlService.getStock().subscribe((res) => {
      if (res && res.success) {
        this.data2 = res.data;
        console.log(this.data2);
      }
    });
  }

}
