import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, Observable,map } from 'rxjs';
import { NaPipe } from '../../pipes/na.pipe';

@Component({
  selector: 'app-pipe',
  imports: [NaPipe,AsyncPipe,JsonPipe,UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  firstName:string="this is title"
  currentDate: Date =new Date()

  currenttime:Observable<Date> = new Observable<Date>

  student:any={
    name:"yash",
    city:"botad",
    id:456,
    state:''
  }
    
  constructor(){
      this.currenttime= interval(1000).pipe(map(()=> new Date())) 
  }

}

