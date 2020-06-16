import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
import { ServerServService } from '../server-serv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css'],
})
export class AssignComponent implements OnInit {
  mentors;
  students;
  id=0 ;
  mentorName;
  assignValues;
  display = false;
  constructor(
    private fb: FormBuilder,
    public ser: ServerServService,
    private router: Router
  ) {
    this.ser.listOfMentors();
    this.ser.listOfStudents();
    console.log(this.ser.students,this.ser.mentor);
    // this.ser.listOfMentors().subscribe((data)=>{
    //   this.mentors=data;
    //   console.log("mentors",this.mentors);
    // },(err)=>{
    //   console.log(err);
    // })
    // this.ser.listOfStudents().subscribe((data)=>{
    //   this.students=data;
    //   console.log("students",this.students);
    // },(err)=>{
    //   console.log(err);
    // })
    this.assignValues = this.fb.group({
      mentorId:this.fb.control(''),
      students: this.fb.array([], [Validators.required]),
    });
  }

  ngOnInit(): void {}
  change(mid, name, bool) {
    this.assignValues.mentorId=new FormControl(mid);
    this.id = mid;
    this.mentorName = name;
    this.display = bool;
    console.log(this.id, this.mentorName,this.assignValues.mentorId.value);
  }
  onCheckChange(event) {
    const formArray: FormArray = this.assignValues.get('students') as FormArray;

    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm
      formArray.push(new FormControl(event.target.value));
    } else {
    /* unselected */
      // find the unselected element
      let i: number = 0;

      formArray.controls.forEach((ctrl: FormControl) => {
        if (ctrl.value == event.target.value) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          return;
        }

        i++;
      });
    }
  }
  assign() {
    // [disabled]="!assignValues.valid"
    // console.log(this.ser.students,this.ser.mentor);
    let obj=this.assignValues.value;
    obj.mentorId=this.id;
    // console.log(obj);
    // console.log(this.assignValues.value);
    this.ser.assignStudent(this.assignValues.value).subscribe(
      (data) => {
        this.ser.listOfMentors();
        this.ser.listOfStudents();
        alert(data.msg);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
