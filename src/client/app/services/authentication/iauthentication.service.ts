import { Observable } from 'rxjs/Observable';
import { InjectionToken } from '@angular/core';

interface IAuthenticationService {
    authenticate(userId: string, password: string): Observable<object>
}

const AUTH_SERVICE_TOKEN = new InjectionToken<IAuthenticationService>('authenticationService');

export {
    AUTH_SERVICE_TOKEN,
    IAuthenticationService
};
