import { Injectable } from '@angular/core'
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor() { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let user = JSON.parse(localStorage.getItem("LoginDetails"));
        if (null != user) {
            if (user['token']) {
                request = request.clone({
                    setHeaders: {
                        Authorization: user['token']
                    }
                });
            } else {
                request = request.clone({
                    setHeaders: {
                        'Content-Type': 'application/json'
                    }
                });
            }
        }
        
        return next.handle(request)
    }

}