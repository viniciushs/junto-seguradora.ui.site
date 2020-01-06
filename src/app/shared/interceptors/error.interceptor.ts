import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { BroadcastEnum } from '../enums/broadcast.enum';
import { AlertService } from '../services/alert.service';
import { AuthService } from 'src/app/services/auth.service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        public authService: AuthService,
        public alertService: AlertService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {

        return next.handle(request)
            .pipe(
                tap(data => {
                    if (data instanceof HttpResponse) {
                        if (data.body && data.body.error) {
                            this.alertService.error(data.body.error);
                            throw new Error(data.body.error);
                        }
                    }
                }),
                catchError(err => {
                    switch (err.status) {
                        // case 0:
                        //    this.alertService.error(err.statusText);
                        //    console.error(err.error);
                        //    break;

                        case 400:
                            this.alertService.error(err.error);
                            break;

                        case 401:
                            // this.authService.logout();
                            break;

                        case 415:

                            break;

                        case 500:
                            const error = err.error.message || err.statusText;
                            this.alertService.error(error);
                            console.error(err.error);
                            break;
                    }

                    return throwError(err);
                }));
    }
}
