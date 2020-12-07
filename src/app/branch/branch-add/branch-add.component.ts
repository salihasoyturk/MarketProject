import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branch-add',
  templateUrl: './branch-add.component.html',
  styleUrls: ['./branch-add.component.css'],
})
export class BranchAddComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  newBranchAdd() {
    console.log('yeni branch eklendi');
  }
  branchAddClose() {
    console.log('add tablosu kapandı ');
  }
}
