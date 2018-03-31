import { Input, Inject, Component } from "@angular/core";
import { IAuthenticationService, AUTH_SERVICE_TOKEN } from "../../services/authentication/iauthentication.service";
import { ITokenStorageService, TOKEN_STORAGE_SERVICE_TOKEN } from "../../services/tokenstorage/itokenstorage.service";
import { IUserProfileService, USER_PROFILE_SERVICE_TOKEN } from "../../services/userprofile/iuserprofile.service";
import { Router } from "@angular/router";

const INVALID_SERVICE_DEFINITIONS = 'Invalid Dependency Service Definitions Provided!';
const HOME_VIEW = 'home';

@Component({
    moduleId: module.id,
    selector: 'login-component',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
class LoginComponent {
    @Input()
    public userName: string;

    @Input()
    public password: string;

    public errorMessage: string = '';

    constructor(
        @Inject(AUTH_SERVICE_TOKEN) private authenticationService: IAuthenticationService,
        @Inject(TOKEN_STORAGE_SERVICE_TOKEN) private tokenStorageService: ITokenStorageService,
        @Inject(USER_PROFILE_SERVICE_TOKEN) private userProfileService: IUserProfileService,
        private routerService: Router) {

        let validation = authenticationService &&
            tokenStorageService && userProfileService && this.routerService;

        if (!validation)
            throw new Error(INVALID_SERVICE_DEFINITIONS);
    }

    login() {
        let validation = this.userName && this.password;

        if (!validation)
            this.errorMessage = 'Invalid Credentials Specified!';

        this.authenticationService
            .authenticate(this.userName, this.password)
            .subscribe(
                result => {
                    if (result) {
                        let convertedObject = <any>result;
                        let authStatus = convertedObject && convertedObject.token;
                        let token = convertedObject.token;

                        if (authStatus) {
                            this.tokenStorageService.setAuthToken(token);
                            this.userProfileService.broadcast(
                                this.userName, authStatus, new Date());

                            this.routerService.navigate([HOME_VIEW]);
                        }
                    }
                },
                error => {
                    this.errorMessage = `Login Failed, Details : ${JSON.stringify(error)}`;
                });
    }
}

export default LoginComponent;
