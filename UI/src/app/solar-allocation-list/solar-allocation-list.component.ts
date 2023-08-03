import { Component, OnInit } from '@angular/core';
import { SolarAllocationListService } from './solar-allocation-list.service';
import { SolarHeater } from '../shared/SolarHeater';

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

  }

  displaySelected() {

  }

  getAllIds() {
    
  }
}
