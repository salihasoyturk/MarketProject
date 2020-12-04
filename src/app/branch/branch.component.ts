import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  myForm!: FormGroup;

  @Input() modalCloseInput: EventEmitter<any> = new EventEmitter<any>();
  @Output() openBranchTable: EventEmitter<any> = new EventEmitter();
  @Output() userInfo: EventEmitter<any> = new EventEmitter<any>();
  IForm: any;

  constructor(
    private fb: FormBuilder,
    public psqlService: PsqlService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
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
    this.router.navigate(['edit'], { relativeTo: this.route });
    console.log('edit tablosu geldi');
  }

  addBranch(): void {
    console.log('add tablosu geldi');
    this.router.navigate(['add'], { relativeTo: this.route });
  }
}
