import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/authentication/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  constructor(private _Router: Router, private _auth: AuthService) {}

  status: boolean = false;

  // form declare
  signUp: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(120),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        // Regex pattern for password validation
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      ),
    ]),
    age: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
  });
  handleSignUp(signUp: FormGroup) {
    console.log(signUp.value);
    if (signUp.valid) {
      this.status = true;
      this._auth.register(signUp.value).subscribe({
        next: (response) => {
          console.log(response);
          this._Router.navigate(['/authentication/sign-in']);
          this.status = false;
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          this.status = false;
        },
      });
      
    }
  }
}
