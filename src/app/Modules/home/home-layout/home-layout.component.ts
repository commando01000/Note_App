import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/authentication/auth.service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
})
export class HomeLayoutComponent {
  constructor(private _auth: AuthService) {
    if (localStorage.getItem('token')) {
      this._auth.isLoggedIn.next(true);
    } else {
      this._auth.isLoggedIn.next(false);
    }
  }
}
