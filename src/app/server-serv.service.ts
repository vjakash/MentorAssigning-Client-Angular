import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

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
    return this.http.post('https://mentor-assigner.herokuapp.com/mentor', data);
  }
  createStudent(data): Observable<any> {
    return this.http.post('https://mentor-assigner.herokuapp.com/students', data);
  }
  assignStudent(data): Observable<any> {
    return this.http.post('https://mentor-assigner.herokuapp.com/assignstudent', data);
  }
  updateMentor(data): Observable<any> {
    return this.http.put('https://mentor-assigner.herokuapp.com/update', data);
  }
  listStudents(data): Observable<any> {
    return this.http.post('https://mentor-assigner.herokuapp.com/liststudents', data);
  }
  listOfStudents() {
    this.http.get('https://mentor-assigner.herokuapp.com/listofstudents').subscribe(
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
    this.http.get('http://localhost:3000/listofmentors').subscribe(
      (data) => {
        this.mentor = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
