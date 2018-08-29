import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthentService } from './authent.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthentService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.auth.isConnected()) {
      request = request.clone({
        withCredentials: true,
        setHeaders: {
          'Authorization': `Basic ${this.auth.getToken()}`
        }
      });
    }
    console.log(request);
    return next.handle(request);
  }
}
