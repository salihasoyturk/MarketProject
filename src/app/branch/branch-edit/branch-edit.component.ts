import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-branch-edit',
  templateUrl: './branch-edit.component.html',
  styleUrls: ['./branch-edit.component.css'],
})
export class BranchEditComponent implements OnInit {
  myForm!: FormGroup;
  updateUser: any;

  constructor() {}

  ngOnInit(): void {}
  branchEditClose() {
    console.log('branch edit kapandı');
  }
  branchUpdate() {
    console.log('branch güncellendi');
  }
}
