import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-api',
  imports: [CommonModule],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {
  posts: any[] = [];

  constructor(private http: HttpClient) {
    this.fetchPosts();
  }

  fetchPosts(): void {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    this.http.get<any[]>(apiUrl).subscribe({
      next: (data) => (this.posts = data),
      error: (error) => console.error('Error fetching data:', error),
    });
  }
}
