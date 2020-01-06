import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { TokenService } from '../services/token.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';


@Injectable()
export class HttpCustomInterceptor implements HttpInterceptor {

    constructor(
        public sessionService: SessionService, 
        public tokenService: TokenService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.sessionService.isAuthenticated()) {
            const token = this.tokenService.getLoggedToken();
            const headers = req.headers.set('Authorization', `Bearer ${token}`);

            req = req.clone({ headers, setParams: { ts: '' + (new Date()).getTime() } });
        }

        return next.handle(req).pipe(map((event: HttpEvent<any>) => {
            return event;
        }));
    }
}