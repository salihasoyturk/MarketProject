import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {  IForm, PsqlService } from '../psql.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  
  myForm!: FormGroup;
  disableSelect = new FormControl(false);

  @Input() updateBranchInfo: IForm = {};
  @Output() modalCloseOutput: EventEmitter<any> = new EventEmitter<any>();
  @Output() modalUpdateOutput: EventEmitter<any> = new EventEmitter<any>();
  constructor(public psqlService: PsqlService) {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl(this.updateBranchInfo.name),
      location: new FormControl(this.updateBranchInfo.location),
      branch_id: new FormControl({
        value: this.updateBranchInfo.branch_id,
        disabled: true,
      }),
    });
  }
  modalClose() {
    console.log('form kapandı');
    this.modalCloseOutput.emit();
  }
  updateBranch() {
    console.log('güncellendi');
    const allData = this.psqlService.data;
    const newData: IForm = this.myForm.getRawValue();
    const selectedData = allData.find(
      (element) => element.branch_id === newData.branch_id
    );
    let selectedData2;
    for (const element of allData) {
      if (element.branch_id === newData.branch_id) {
        selectedData2 = element;
        break;
      }
    }
    if (selectedData) {
      selectedData.name = newData.name;
      selectedData.location = newData.location;
      selectedData.branch_id = newData.branch_id;
      
      
    }

    this.modalCloseOutput.emit();
    console.log(newData);
  }
 
}
