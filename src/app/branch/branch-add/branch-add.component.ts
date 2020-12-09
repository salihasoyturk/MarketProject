import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PsqlService } from 'src/app/psql.service';
import { BranchComponent } from '../branch.component';

@Component({
  selector: 'app-branch-add',
  templateUrl: './branch-add.component.html',
  styleUrls: ['./branch-add.component.css'],
})
export class BranchAddComponent implements OnInit {
  // data2: any;

  constructor(
    private psqlService: PsqlService,
    private router: Router,
    public branchCompenent: BranchComponent
  ) {}

  ngOnInit(): void {
    // this.get();
  }
  // get() {
  //   this.psqlService.getBranch().subscribe((res) => {
  //     if (res && res.success) {
  //       this.data2 = res.data;
  //     }
  //     console.log('Branch güncellendi');
  //   });
  // }
  newBranchAdd() {
    this.router.navigateByUrl('branch-table');
    console.log('Yeni branch eklendi');
  }
  branchAddClose() {
    this.router.navigateByUrl('branch-table');
    console.log('Eklenme yapılmadı');
  }
}
