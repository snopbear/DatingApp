import { ErrorTracker } from '../error-tracker/error-tracker';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

export class ErrorHandler {
    static handleHttpErrorTracker(error: HttpErrorResponse): Observable<ErrorTracker> {
        const dataError = new ErrorTracker();
        dataError.errorNumber = error.status;
        dataError.message = error.error;
        return throwError(dataError);
      }
      static handleHttpError(errorResponse: HttpErrorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
          console.error('Client Side Error :', errorResponse.error.message);
        } else {
          console.error('Server Side Error :', errorResponse);
        }
        // return an observable with a meaningful error message to the end user
        return throwError('There is a problem with the service.We are notified & working on it.Please try again later.');
      }
}
