import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-checkbox',
  templateUrl: './filter-checkbox.component.html',
  styleUrls: ['./filter-checkbox.component.css']
})
export class FilterCheckboxComponent implements OnInit {
  checked = false;
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
