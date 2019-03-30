import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ErrorHandler } from 'src/app/infrastructure/core/error-handler/error-handler';
import { ErrorTracker } from 'src/app/infrastructure/core/error-tracker/error-tracker';

@Injectable({
  providedIn: 'root'
})
export class ValuesService {

  baseUrl = 'http://localhost:62489/api/values';
  constructor(private http: HttpClient) { }


  get(): Observable<any | ErrorTracker> {
    return this.http
    .get<any>(this.baseUrl)
    .pipe(catchError(err => ErrorHandler.handleHttpErrorTracker(err)
    ));
}

}
