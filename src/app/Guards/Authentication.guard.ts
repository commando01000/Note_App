import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const AuthenticationGuard: CanActivateFn = (route, state) => {
  let _router = inject(Router);
  if (localStorage.getItem('token') == null) {
    return true;
  } else {
    _router.navigate(['/home']);
    return false;
  }
};
