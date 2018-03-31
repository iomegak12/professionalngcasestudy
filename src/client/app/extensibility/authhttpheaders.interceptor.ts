import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable, Inject } from '@angular/core';
import { ITokenStorageService, TOKEN_STORAGE_SERVICE_TOKEN } from '../services/tokenstorage/itokenstorage.service';

const BEARER = 'Bearer';

@Injectable()
class AuthHttpHeadersInteptor implements HttpInterceptor {
    constructor(@Inject(TOKEN_STORAGE_SERVICE_TOKEN) private tokenStorageService: ITokenStorageService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authToken = this.tokenStorageService.getAuthToken();

        if (!authToken) {
            next.handle(req);
        }

        let request = req.clone({
            setHeaders: {
                Authorization: `${BEARER} ${authToken}`
            }
        });

        return next.handle(request);
    }
}

export default AuthHttpHeadersInteptor;
