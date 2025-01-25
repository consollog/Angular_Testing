import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login2',
  imports: [FormsModule,CommonModule],
  templateUrl: './login2.component.html',
  styleUrl: './login2.component.css'
})
export class Login2Component {
  username = '';
  password = '';
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        if (response.success) {
          // Redirect to home on successful login
          this.router.navigate(['/home']);
        } else {
          this.errorMessage = response.message || 'Login failed!';
        }
      },
      error: () => {
        this.errorMessage = 'An error occurred during login. Please try again.';
      },
    });
  }
}
