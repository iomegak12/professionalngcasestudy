import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

const JSON_CONTENT_TYPE: string = 'application/json';

@Injectable()
class JsonHttpHeadersInteptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let request = req.clone({
            setHeaders: {
                'Content-Type': JSON_CONTENT_TYPE,
                'Accept': JSON_CONTENT_TYPE
            }
        });

        return next.handle(request);
    }
}

export default JsonHttpHeadersInteptor;
