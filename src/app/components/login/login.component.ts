import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';

  // Hardcoded credentials
  private readonly validUsername = 'admin';
  private readonly validPassword = 'password';

  constructor(private router: Router) {}

  login() {
    if (this.username === this.validUsername && this.password === this.validPassword) {
      this.router.navigate(['/home']);
    } else {
      alert('Invalid username or password!');
    }
  }
}
