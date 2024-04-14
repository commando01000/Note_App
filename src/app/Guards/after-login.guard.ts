import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const afterLoginGuard: CanActivateFn = (route, state) => {
  let _Router = inject(Router);
  if (localStorage.getItem('token') == null) {
    _Router.navigate(['/authentication']);
    return false;
  } else {
    return true;
  }
};
