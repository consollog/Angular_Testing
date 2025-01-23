import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { PostComponent } from './components/post/post.component';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveComponent,PostComponent,CommonModule,FormsModule,JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-Project';

  response:any

  handleResponse(event: any) {
    this.response = event; 
  }
}
