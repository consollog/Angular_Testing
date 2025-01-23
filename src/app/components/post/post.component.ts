import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-post',
  imports: [FormsModule,CommonModule,JsonPipe],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  postData = {
    title: '',
    body: ''
  };
  response: any;

  constructor(private apiService: ApiService) {}

  submitForm() {
    this.apiService.createPost(this.postData).subscribe({
      next: (data) => {
        this.response = data; 
        console.log('Success:', data);
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }
}
