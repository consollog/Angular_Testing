import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-for-guard',
  imports: [CommonModule],
  templateUrl: './home-for-guard.component.html',
  styleUrl: './home-for-guard.component.css'
})
export class HomeForGuardComponent {
  isLoggedIn: boolean = false;

  constructor(private router: Router) {
    // Check if the user is logged in
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }

  goToLogin() {
    this.router.navigate(['/login']);  // Redirect to login page
  }
}
