import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../Model/Student.model';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  private baseUrl = 'http://localhost:8010/api/students';

  constructor(private httpClient: HttpClient) { }

  createStudent(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(`${this.baseUrl}/addStudent`, student);
  }

  getStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${this.baseUrl}/getStudents`);
  }
}
