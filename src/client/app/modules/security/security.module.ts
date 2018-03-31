import { NgModule } from "@angular/core";
import { TOKEN_STORAGE_SERVICE_TOKEN } from "../../services/tokenstorage/itokenstorage.service";
import TokenStorageService from "../../services/tokenstorage/tokenstorage.service";
import { AUTH_SERVICE_TOKEN } from "../../services/authentication/iauthentication.service";
import { AuthenticationService, AUTH_SERVICE_URL_TOKEN } from "../../services/authentication/authentication.service";
import { USER_PROFILE_SERVICE_TOKEN } from "../../services/userprofile/iuserprofile.service";
import UserProfileService from "../../services/userprofile/userprofile.service";
import LoginComponent from "../../components/login/login.component";
import securityRouteDefinition from '../../routing/security/security.routes';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import AuthHttpHeadersInteptor from "../../extensibility/authhttpheaders.interceptor";

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule, securityRouteDefinition],
    declarations: [LoginComponent],
    providers: [
        {
            provide: AUTH_SERVICE_URL_TOKEN,
            useFactory: () => {
                let buildType = String('<%= BUILD_TYPE %>');
                let authServiceUrl = '';

                if (buildType === 'prod') {
                    authServiceUrl = String('<%= PROD_AUTH_SERVICE_URL %>');
                } else {
                    authServiceUrl = String('<%= DEV_AUTH_SERVICE_URL %>');
                }

                return authServiceUrl;
            }
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthHttpHeadersInteptor,
            multi: true
        },
        {
            provide: TOKEN_STORAGE_SERVICE_TOKEN,
            useClass: TokenStorageService
        },
        {
            provide: AUTH_SERVICE_TOKEN,
            useClass: AuthenticationService
        },
        {
            provide: USER_PROFILE_SERVICE_TOKEN,
            useClass: UserProfileService
        }
    ]
})
class SecurityModule {
    constructor() {
        console.log('Security Module Initialized!');
    }
}

export default SecurityModule;
