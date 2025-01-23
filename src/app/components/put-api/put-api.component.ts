import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-put-api',
  imports: [CommonModule,FormsModule,FormsModule],
  templateUrl: './put-api.component.html',
  styleUrl: './put-api.component.css'
})
export class PutApiComponent {
  user = {
    name: 'John',
    surname: 'Doe',
    address: '123 Main St',
  }; 

  isEditing = false;
  response: string | null = null; 

  constructor(private http: HttpClient) {}

  editUser(): void {
    this.isEditing = true;
    this.response = null;
  }

  saveUser(): void {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users/1';

    this.http.put(apiUrl, this.user).subscribe({
      next: () => {
        this.response = 'User details updated successfully!';
        this.isEditing = false; 
      },
      error: (error) => console.error('Error saving user:', error),
    });
  }

  deleteUser(): void {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users/1';

    this.http.delete(apiUrl).subscribe({
      next: () => {
        this.response = 'User deleted successfully!';
        this.user = { name: '', surname: '', address: '' };
        this.isEditing = false; 
      },
      error: (error) => console.error('Error deleting user:', error),
    });
  }
}
