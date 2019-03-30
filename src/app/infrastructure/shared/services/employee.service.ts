import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:62489/api/employee';
   }

  get(): Observable<Employee[]> {
    return this.http
      .get<Employee[]>(this.baseUrl)
      .pipe(err => err);
  }

  add(employee: Employee ): Observable<Employee> {
      return this.http
      .post<Employee>(this.baseUrl, employee)
      .pipe(err => err);
  }


  upload(fileToUpload: any) {
    const input = new FormData();
    input.append('file', fileToUpload);

    return this.http
        .post(`${this.baseUrl}/upload`, input);
}


}
