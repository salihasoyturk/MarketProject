import { Component, OnInit, ɵɵresolveBody } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { branchModel, PsqlService } from 'src/app/psql.service';
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
    console.log('branch edit kapandı');
  }
  //GÜNCELENEN BRANCH'İ GÖNDERMEK İÇİN
  branchUpdate(item: any): void {
    console.log(this.psqlService.updateBranch(item));

    this.myForm.reset();
  }
}
