import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllocateServiceService {

  constructor(private http: HttpClient) { }

  allocateUrl: string = 'http://localhost:3050/allocate';

  getData(data: any): Observable<any> {
    return this.http.post<any>(this.allocateUrl, data);
  }
 }
