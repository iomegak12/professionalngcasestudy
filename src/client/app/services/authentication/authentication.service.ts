import { IAuthenticationService } from "./iauthentication.service";
import { Observable } from 'rxjs/Observable';
import { InjectionToken, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const AUTH_SERVICE_URL_TOKEN = new InjectionToken<string>('authenticationServiceUrl');

class AuthenticationService implements IAuthenticationService {
    constructor(
        private httpClient: HttpClient,
        @Inject(AUTH_SERVICE_URL_TOKEN)
        private authenticationServiceBaseUrl: string) { }

    authenticate(userId: string, password: string): Observable<object> {
        let requestBody = {
            userId,
            password
        };

        let authenticationServiceUrl = `${this.authenticationServiceBaseUrl}/authenticate`;
        let response = this.httpClient.post(authenticationServiceUrl, requestBody);

        return response;
    }
}

export {
    AUTH_SERVICE_URL_TOKEN,
    AuthenticationService
};
