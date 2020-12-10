import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { PsqlService } from '../psql.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
})
export class StockComponent implements OnInit {
  baseUrl = 'http://localhost:5000/branch';
  data2: any;

  constructor(
    public psqlService: PsqlService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.get();
  }
  get() {
    this.psqlService.getStock().subscribe((res) => {
      if (res && res.success) {
        this.data2 = res.data;
      }
      console.log(res);
    });
  }

  getTotalStock(data2: any): void {

    this.router.navigate(['details'], { relativeTo: this.route });
    // console.log(this.data2);
  }
}
