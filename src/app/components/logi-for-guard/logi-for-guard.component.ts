import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logi-for-guard',
  imports: [FormsModule],
  templateUrl: './logi-for-guard.component.html',
  styleUrl: './logi-for-guard.component.css'
})
export class LogiForGuardComponent {
  username = '';
  password = '';

  // Hardcoded credentials
  private readonly validUsername = 'admin';
  private readonly validPassword = 'password';

  constructor(private router: Router) {}

  login() {
    if (this.username === this.validUsername && this.password === this.validPassword) {
      // Store login status in localStorage
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/']);  // Redirect back to the home page
    } else {
      alert('Invalid username or password!');
    }
  }
}
