import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {

  studentForm: FormGroup= new FormGroup({
    firstName: new FormControl("",[Validators.required,Validators.minLength(4)]),
    lastName: new FormControl(""),
    userName: new FormControl(""),
    city:new FormControl(""),
    state:new FormControl(""),
    zipcode:new FormControl(""),
    isAcceptTerms:new FormControl(""),
  })

  formField:any;

  onsave(){
   this.formField=this.studentForm.value
  }
   
}
