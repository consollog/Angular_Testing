import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template',
  imports: [FormsModule,JsonPipe],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {
  formDetail: any={
    firstName:'',
    lastName:'',
    uaseName:'',
    state:'',
    city:'', 
    zipcode:'', 
    isAcceptTerm:false
  }

  formvalue:any

  submite(){
    debugger
    this.formvalue=this.formDetail
  }

}
