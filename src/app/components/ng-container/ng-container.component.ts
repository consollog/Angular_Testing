import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  imports: [CommonModule],
  templateUrl: './ng-container.component.html',
  styleUrl: './ng-container.component.css'
})
export class NgContainerComponent {
  isContainer:boolean=false
  http=inject(HttpClient)

  userlist:any[]=[]
  isApi:boolean=false

  getuser(){
    this.isApi=true
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
    this.userlist=res
    this.isApi=false
    })
  }
}
