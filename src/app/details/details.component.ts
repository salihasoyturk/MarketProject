import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
data :any;
tableOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
