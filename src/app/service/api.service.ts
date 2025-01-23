import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; 

  createPost(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
