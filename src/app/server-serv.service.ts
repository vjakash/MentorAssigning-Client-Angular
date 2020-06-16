import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServerServService {
  students;
  mentor;
  constructor(private http: HttpClient) {
    this.listOfMentors();
    this.listOfStudents();
  }

  createMentor(data): Observable<any> {
    // console.log(data);
    return this.http.post(`${environment.urltest}/mentor`, data);
  }
  createStudent(data): Observable<any> {
    return this.http.post(`${environment.urltest}/students`, data);
  }
  assignStudent(data): Observable<any> {
    return this.http.post(`${environment.urltest}/assignstudent`, data);
  }
  updateMentor(data): Observable<any> {
    return this.http.put(`${environment.urltest}/update`, data);
  }
  listStudents(data): Observable<any> {
    return this.http.post(`${environment.urltest}/liststudents`, data);
  }
  listOfStudents() {
    this.http.get(`${environment.urltest}/listofstudents`).subscribe(
      (data) => {
        this.students = data;
        return of(true);
        //  console.log(this.students);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  listOfMentors() {
    this.http.get(`${environment.urltest}/listofmentors`).subscribe(
      (data) => {
        this.mentor = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
