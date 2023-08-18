import { Component, OnInit } from '@angular/core';
import { SolarAllocationListService } from './solar-allocation-list.service';
import { SolarHeater } from '../shared/constants/SolarHeater';

@Component({
  selector: 'app-solar-allocation-list',
  templateUrl: './solar-allocation-list.component.html',
  styleUrls: ['./solar-allocation-list.component.css']
})
export class SolarAllocationListComponent implements OnInit {
  solarHeaterIds: number[] = [];
  selectedSolar: SolarHeater;
  selectedId;
  errorMsg;

  constructor(private allocation: SolarAllocationListService) { }

  ngOnInit(): void {
    this.getAllIds();
  }

  displaySelected() {
    this.allocation.getSolarHeaterById(this.selectedId).subscribe(
      success => {this.selectedSolar = success},
      error => {this.errorMsg = error.message}
    )
  }

  getAllIds() {
    this.allocation.getAllocations().subscribe(
      success => {this.solarHeaterIds = success},
      error => {this.errorMsg = error.message}
    )
  }
}
