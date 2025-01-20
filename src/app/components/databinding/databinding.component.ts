import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
   name:string="yash"
   stateName:string="gujrat"
   number=123;
   checkbox="checkbox"
   myclassName: string="bg-primary"

   firstName= signal("yash soni")

   constructor(){

   }

   showAlert(message:string){
    alert(message)
   }
}
