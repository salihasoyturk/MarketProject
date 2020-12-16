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
  branchList: any;
  stokList: any;

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
        this.branchList = res.data;
      }
    });
  }

  getTotalStock(item: any): void {
    this.stokList = undefined;
    this.psqlService.getBranchByID(item.branch_id).subscribe((res) => {
      this.stokList = res.data;
    });
    this.router.navigate([item.branch_id], {
      relativeTo: this.route,
    });
  }
}
