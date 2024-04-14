import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/authentication/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  isLoggedIn: boolean = false;
  currentStatus: string = 'Login';
  constructor(private _auth: AuthService, private _router: Router) {
    if (this._auth.isLoggedIn.getValue()) {
      this.isLoggedIn = this._auth.isLoggedIn.getValue();
      console.log(this._auth.isLoggedIn.getValue());
    } else {
      this.isLoggedIn = this._auth.isLoggedIn.getValue();
      console.log(this._auth.isLoggedIn.getValue());
    }
  }
  changeNavBarStatus() {
    if (this._auth.currentStatus.getValue() == 'Login') {
      this._auth.currentStatus.next('Register');
      this.currentStatus = this._auth.currentStatus.getValue();
    } else {
      this._auth.currentStatus.next('Login');
      this.currentStatus = this._auth.currentStatus.getValue();
    }
  }
  logout() {
    this._auth.endUserSession();
    this._router.navigate(['/authentication/sign-in']);
  }

  ngOnInit(): void {}
}
