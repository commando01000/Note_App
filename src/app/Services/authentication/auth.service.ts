import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData = new BehaviorSubject(null);
  isLoggedIn = new BehaviorSubject(false)
  currentStatus = new BehaviorSubject('Login');
  constructor(private _http: HttpClient) {}
  getUserData() {
    let encodedToken: any = localStorage.getItem('token');
    let decodedToken: any = jwtDecode(encodedToken);
    console.log(decodedToken);
    this.isLoggedIn.next(true);
    this.userData.next(decodedToken);
  }
  endUserSession() {
    this.userData.next(null);
    this.isLoggedIn.next(false);
    localStorage.removeItem('token');
  }
  login(form: FormGroup): Observable<any> {
    return this._http.post(
      'https://note-sigma-black.vercel.app/api/v1/users/signIn',
      form
    );
  }
  register(form: FormGroup): Observable<any> {
    return this._http.post(
      'https://note-sigma-black.vercel.app/api/v1/users/signUp',
      form
    );
  }
}
