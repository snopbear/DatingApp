import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ErrorHandler } from 'src/app/infrastructure/core/error-handler/error-handler';
import { ErrorTracker } from 'src/app/infrastructure/core/error-tracker/error-tracker';
import { Login } from '../../_models/login/login';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:62489/api/auth/';
  constructor(private http: HttpClient) { }


  login(loginModel: Login): Observable<Login | ErrorTracker> {
    return this.http
      .post<Login>(this.baseUrl + 'login', loginModel)
      .pipe(catchError(err => ErrorHandler.handleHttpErrorTracker(err)
      ));
  }



  register(loginModel: Login): Observable<Login | ErrorTracker> {
    return this.http
      .post<Login>(this.baseUrl + 'register', loginModel)
      .pipe(catchError(err => ErrorHandler.handleHttpErrorTracker(err)
      ));
  }
}
