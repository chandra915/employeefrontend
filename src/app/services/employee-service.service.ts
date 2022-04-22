import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './../model/employee';

const api_url='http://44.202.156.39/employee'

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http: HttpClient) { }


  listEmployees(): Observable<any>{
    return this.http.get(api_url);
  }

  fetchEmployee(id : number): Observable<any>{
    return this.http.get(`${api_url}/${id}`);
  }

  addEmployee(data: Employee): Observable<any>{
    return this.http.post(api_url,data);
  }
  
  deleteEmployee(id: number): Observable<any>{
    return this.http.delete(`${api_url}/${id}`);
  }

  editEmployee(id: number,data:Employee): Observable<any>{
    return this.http.put(`${api_url}/${id}`,data);
  }


}
