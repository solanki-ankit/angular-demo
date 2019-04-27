import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse,
    HttpResponse
} from '@angular/common/http';
import { AuthService } from '../services/auth/auth.service';
import { Observable, of } from 'rxjs';
import { catchError, tap } from "rxjs/internal/operators";
import { RequestCacheService } from './../services/request-cache/request-cache.service';
import { TostService } from './../services/tost/tost.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(
        private auth: AuthService,
        private tost: TostService,
        private cache: RequestCacheService,
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authToken = this.auth.getAccessToken();
        // Logged in. Add token.
        if (authToken) {
            const { userId = null } = this.auth.currentUserValue;
            req = req.clone({
                setHeaders: {
                    Token: authToken,
                    UserId: userId
                }
            });
        }

        //continues request execution
        return next.handle(req).pipe(catchError((error, caught) => {
            //intercept the response error
            console.log('error', error);
            this.handleAuthError(error);
            return of(error);
        }) as any);
    }

    // With storing cache
    // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //     const authToken = this.auth.getAccessToken();
    //     // Logged in. Add token.
    //     if (authToken) {
    //         const { userId = null } = this.auth.currentUserValue;
    //         req = req.clone({
    //             setHeaders: {
    //                 Token: authToken,
    //                 UserId: userId
    //             }
    //         });
    //     }
    //     const cachedResponse = this.cache.get(req);
    //     //continues request execution
    //     return cachedResponse ? of(cachedResponse) : next.handle(req).pipe(tap(event => {
    //         if (event instanceof HttpResponse) {
    //             this.cache.put(req, event);
    //         }
    //     }), catchError((error, caught) => {
    //         //intercept the response error
    //         console.log('error', error);
    //         this.handleAuthError(error);
    //         return of(error);
    //     }) as any);
    // }

    //manage errors
    private handleAuthError(err: HttpErrorResponse): Observable<any> {
        //handle your auth error or rethrow
        if (err.status === 401 || err.status === 403) {
            console.log(`handled error :: ${err.status}`);
            this.auth.logout();
            this.tost.error('Unauthorized access. Please login again.');
            // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
            return of(err.message);
        }
        throw err;
    }
}