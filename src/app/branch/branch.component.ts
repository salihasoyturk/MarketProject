import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { PsqlService } from '../psql.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css'],
})
export class BranchComponent implements OnInit {
  baseUrl = 'http://localhost:5000/branch';
  constructor(
    public psqlService: PsqlService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  data2: any;
  selectData: any;
  infoSubject = new BehaviorSubject({});
  ngOnInit() {
    this.get();
  }
  //DELETE TUŞUNA BASINCA
  get() {
    this.psqlService.getBranch().subscribe((res) => {
      if (res && res.success) {
        this.data2 = res.data;
      }
      console.log('branch tablosu geldi');
    });
  }
  delete(item: any) {
    console.log(item);
    item.tableName = 'branch';
    item.columnName = 'branch_id';
    this.psqlService.deleteBranch(item).subscribe((res) => {
      console.log(res);
      console.log('branch silindi');

      this.get();
    });

    // console.log('sildi',`${this.baseUrl}/${branch_id}`);
  }
  //EDİT TUŞUNA BASILINCA
  edit(item: any): any {
    console.log('edit tablosu geldi');
    this.selectData = item;
    this.router.navigate(['edit'], { relativeTo: this.route });
    console.log(item);
    this.infoSubject.next(item);
  }
  //ADD TUŞUNA BASILINCA
  addBranch(): void {
    console.log('add tablosu geldi');
    this.router.navigate(['add'], { relativeTo: this.route });
  }
}
