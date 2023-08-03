import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SolarHeater } from '../shared/SolarHeater';

@Injectable({
  providedIn: 'root'
})
export class SolarAllocationListService {

  constructor(private http: HttpClient) { }

  getAllocations() : Observable<number[]> {
    return this.http.get<number[]>("http://localhost:3050/getSolarHeaterIds");
  }

  getSolarHeaterById(id) : Observable<SolarHeater> {
    return this.http.get<SolarHeater>("http://localhost:3050/getHeaterById/" + id);
  }
}
