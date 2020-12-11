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
      // console.log(res);
    });
  }

  getTotalStock(item: any): void {
    this.stokList = undefined;
    this.psqlService.getBranchByID(item.branch_id).subscribe((res) => {
      this.stokList = res.data;
    });
    this.router.navigate(['details'], {
      relativeTo: this.route,
    });

    // console.log(this.data2);
  }
}

// public rowSelectUser(event) {
//   this.clickRowName = event.name
//   this.router.navigate([event.id], {
//     relativeTo: this.activatedRoute,
//     // queryParams: { groupName: event.name },
//     // queryParamsHandling: 'merge'
//   });
// }

// this.activatedRoute.params.subscribe((res) => {
//     this.userId = res.id;
//     this.getUserService(res.id);
//     this.getUserGroups(res.id);
//     console.log(this.userComponent.clickRowName);
//   });
