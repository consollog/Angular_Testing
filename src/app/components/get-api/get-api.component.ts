import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-api',
  imports: [FormsModule,CommonModule],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {
  data: any = []; 

  constructor(private http: HttpClient) { }

  getData() {
    this.http.get('https://api.example.com/data') 
      .subscribe(
        (response) => { 
          this.data = response; 
        },
        (error) => {
          console.error('Error fetching data:', error); 
        }
      );
  }
}
