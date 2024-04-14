import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/authentication/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  flag: boolean = false;
  apiError: string = '';
  constructor(private _Router: Router, private _auth: AuthService) {
  }
  //bulid the login form
  login: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        // Regex pattern for password validation
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      ),
    ]),
  });
  handleLogin(login: FormGroup) {
    if (login.valid) {
      this._auth.login(login.value).subscribe({
        next: (response) => {
          console.log(response);
          localStorage.setItem('token', response.token);
          this._auth.getUserData();
          this._Router.navigate(['/home']);
        },
        error: (err) => {
          this.apiError = err.error.message;
        },
        complete: () => {
          this.flag = true;
          console.log('completed');
        },
      });
    }
  }
}
