import { Component, OnInit } from '@angular/core';
import { PsqlService } from '../psql.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
data :any;
IBranch :any;
IProduct: any;
IStock: any;

tableOpenState = false;



  constructor(public psqlService: PsqlService) { }

  ngOnInit(): void {
    this.data = this.psqlService.branchData;
    // console.log(this.psqlService.branchData);
    console.log('geldi')
  }

}
