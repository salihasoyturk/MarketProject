import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PsqlService } from '../psql.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css'],
})
export class BranchComponent implements OnInit {
  @Input() modalCloseInput: EventEmitter<any> = new EventEmitter<any>();
  @Output() openBranchTable: EventEmitter<any> = new EventEmitter();

  constructor(public psqlService: PsqlService) {}
  data2: any;

  ngOnInit() {
    this.psqlService.getBranch().subscribe((res) => {
      if (res && res.success) {
        this.data2 = res.data;
        console.log(this.data2);
      }
    });
  }

  closeBranch(): void {
    this.openBranchTable.emit(false);
    console.log('branch tablosu kapandı');

  }

  addBranch(): void {
    console.log('eklendi');
  }
}
