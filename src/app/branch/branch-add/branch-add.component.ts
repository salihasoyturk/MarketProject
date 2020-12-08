import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BranchComponent } from '../branch.component';

@Component({
  selector: 'app-branch-add',
  templateUrl: './branch-add.component.html',
  styleUrls: ['./branch-add.component.css'],
})
export class BranchAddComponent implements OnInit {
  constructor(
    private router: Router,
    public branchCompenent: BranchComponent
  ) {}

  ngOnInit(): void {}
  newBranchAdd() {
    console.log('Yeni branch eklendi');
    this.router.navigateByUrl('branch-table');
  }
  branchAddClose() {
    this.router.navigateByUrl('branch-table');
    console.log('Eklenme yapılmadı');
  }
}
