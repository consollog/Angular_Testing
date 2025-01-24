import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  imports: [CommonModule],
  templateUrl: './ng-template.component.html',
  styleUrl: './ng-template.component.css'
})
export class NgTemplateComponent {
  isLoggedin:boolean=false;
 looggedinUser:string="Yash";

 @ViewChild('dynamictemp') dynamictemp: TemplateRef<any>| undefined
 @ViewChild('dynamiContainer',{read:ViewContainerRef}) dynamiContainer: ViewContainerRef| undefined

 DynamicTempDisplay(){
   if(this.dynamictemp){
    debugger
    this.dynamiContainer?.createEmbeddedView(this.dynamictemp)
   }
 }
}
