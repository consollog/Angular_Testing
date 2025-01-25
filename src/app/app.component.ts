import { Component } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { NgContainerComponent } from './components/ng-container/ng-container.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
// import { NgTemplateComponent } from './components/ng-template/ng-template.component';
// import { ReactiveComponent } from './components/reactive/reactive.component';
// import { PostComponent } from './components/post/post.component';
// import { FormsModule } from '@angular/forms';
// import { GetApiComponent } from './components/get-api/get-api.component';
// import { PutApiComponent } from './components/put-api/put-api.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
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
