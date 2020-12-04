import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-branch-add',
  templateUrl: './branch-add.component.html',
  styleUrls: ['./branch-add.component.css'],
})
export class BranchAddComponent implements OnInit {
  myForm!: FormGroup;
  updateUser: any;
  constructor() {}

  ngOnInit(): void {
    // this.myForm = new FormGroup({
    //   name: new FormControl(this.updateUser.name),
    //   location: new FormControl(this.updateUser.location),
    //   branch_id: new FormControl({
    //     value: this.updateUser.branch_id,
    //     disabled: true,
    //   }),
    // });
  }
  newBranchAdd() {
    console.log('yeni branch eklendi');
  }
  branchAddClose() {
    console.log('add tablosu kapandı ');
  }
}
