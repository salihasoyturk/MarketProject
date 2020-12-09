import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PsqlService } from 'src/app/psql.service';
import { BranchComponent } from '../branch.component';

@Component({
  selector: 'app-branch-edit',
  templateUrl: './branch-edit.component.html',
  styleUrls: ['./branch-edit.component.css'],
})
export class BranchEditComponent implements OnInit {
  myForm = new FormGroup({
    branch_id: new FormControl(),
    name: new FormControl(),
    location: new FormControl(),
  });

  disableSelect = new FormControl(true);


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private fb: FormBuilder,
    public psqlService: PsqlService,
    public branchCompenent: BranchComponent
  ) {}

  ngOnInit(): void {
    this.branchCompenent.infoSubject.subscribe((item: any) => {
      this.myForm.patchValue({
        branch_id: item.branch_id,
        name: item.name,
        location: item.location,
      });
    });
  }

  //EDİT FORMUNU KAPATMAK İÇİN
  branchEditClose() {
    this.router.navigateByUrl('branch-table');

    console.log('Değişiklik yapılmadı');
  }
  //GÜNCELENEN BRANCH'İ GÖNDERMEK İÇİN
  branchUpdate(): void {
    const form = { ...this.myForm.value };

    console.log(form);

    const newData = this.psqlService.updateBranch(form).subscribe(
      (res) => {
        console.log(res);

        if (res.success && res) {
          this.branchCompenent.get();
          this.router.navigateByUrl('branch-table');
        }
      },
      (err: HttpErrorResponse) => {
        console.log('err', err);
      }
    );
    this.myForm.reset();
  }
}
