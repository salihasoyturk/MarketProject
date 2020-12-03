import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { PsqlService } from '../psql.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css'],
})
export class BranchComponent implements OnInit {
  modalOpenState = false;
  disableSelect = new FormControl(false);
  baseUrl = 'http://localhost:5000/branch';
  currentUser: any;

  @Input() modalCloseInput: EventEmitter<any> = new EventEmitter<any>();
  @Output() openBranchTable: EventEmitter<any> = new EventEmitter();
  @Output() branchInfo: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder, public psqlService: PsqlService) {}
  data2: any;

  currentBranch: any;

  ngOnInit() {
    this.psqlService.getBranch().subscribe((res) => {
      if (res && res.success) {
        this.data2 = res.data;
        console.log(this.data2);
      }
    });
  }
  
  delete(item: any) {
    console.log(item);
    item.tableName = 'branch';
    item.columnName = 'branch_id';
    this.psqlService.deleteBranch(item).subscribe((res) => {
      console.log(res);
    });

    // console.log('sildi',`${this.baseUrl}/${branch_id}`);
  }

  edit(item: any): void {
    this.branchInfo.emit(item);
  }

  // add(): void {
  // this.addBranch.emit();
  // }
}
