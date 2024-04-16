import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor {
  userToken: any = "3b8ny__" + localStorage.getItem('token');
  constructor() {
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let newReq = request.clone({
      headers: request.headers.set('token', this.userToken),
    });
    return next.handle(newReq);
  }
}
