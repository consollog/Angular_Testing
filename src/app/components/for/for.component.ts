import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-for',
  imports: [FormsModule],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {
 
  Daynumber:string=''
 
  cityArray:string[]=["AMD","Surat","Rajkot","Baroda"]

 studentList:any[]=[
  {studentId:21,name:"A",city:"AMD",isactive:false},
  {studentId:29,name:"B",city:"Surat",isactive:false},
  {studentId:35,name:"C",city:"Rajkot",isactive:true},
  {studentId:45,name:"D",city:"Baroda",isactive:false}
 ]

}
