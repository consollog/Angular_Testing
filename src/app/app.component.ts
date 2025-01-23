import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { PostComponent } from './components/post/post.component';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GetApiComponent } from './components/get-api/get-api.component';
import { PutApiComponent } from './components/put-api/put-api.component';

@Component({
  selector: 'app-root',
  imports: [PutApiComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-Project';

  // response:any

  // handleResponse(event: any) {
  //   console.log("hello")
  //   this.response = event; 
  // }
}
