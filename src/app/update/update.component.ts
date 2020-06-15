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
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  updateValue;
  mId=null;
  sId=null;
  display=false;
  constructor(
    private fb: FormBuilder,
    public ser: ServerServService,
    private router: Router
  ) {
    this.updateValue = {
      mentorId: this.mId,
      studentId: this.sId,
    };
  }

  ngOnInit(): void {}
  onCheckChange(event){
    this.updateValue.mentorId=parseInt(event.target.value);
    console.log(this.updateValue.mentorId)
  }
  change(id,bool){
    this.updateValue.studentId=id;
    this.display=bool;
  }
  update(){
    console.log(this.updateValue);
    this.ser.updateMentor(this.updateValue).subscribe((data)=>{
      alert(data.msg);
    },(err)=>{
      console.log(err);
    })
  }
}
