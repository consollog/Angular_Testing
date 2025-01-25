import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);  // Inject Router
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (isLoggedIn) {
    // If the user is logged in, redirect to home page
    router.navigate(['/']);
    return false;  // Prevent accessing the login page
  }

  return true;
};
