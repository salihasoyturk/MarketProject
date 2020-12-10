import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PsqlService } from 'src/app/psql.service';
import { BranchComponent } from '../branch.component';

@Component({
  selector: 'app-branch-add',
  templateUrl: './branch-add.component.html',
  styleUrls: ['./branch-add.component.css'],
})
export class BranchAddComponent implements OnInit {
  myForm!: FormGroup;
  constructor(
    private psqlService: PsqlService,
    private router: Router,
    public branchCompenent: BranchComponent
  ) {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      location: new FormControl(''),
    });
  }

  branchAdd() {
    // console.log(newData);
    const formName1 = this.myForm.get('name')!.value;
    const formLocation1 = this.myForm.get('location')!.value;
    console.log(formName1, formLocation1);

    const newData = {
      name: formName1,
      location: formLocation1,
    };
    console.log('Yeni branch eklendi');
    this.psqlService.addNewBranch(newData).subscribe((res) => {
      this.branchCompenent.get();
      this.router.navigateByUrl('branch-table');
    });
  }
  branchAddClose() {
    this.router.navigateByUrl('branch-table');
    console.log('Eklenme yapılmadı');
  }
}
