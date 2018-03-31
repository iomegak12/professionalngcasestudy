import { Component, Inject, OnInit } from '@angular/core';
import { IUserProfileService, USER_PROFILE_SERVICE_TOKEN } from '../../services/userprofile/iuserprofile.service';
import { ITokenStorageService, TOKEN_STORAGE_SERVICE_TOKEN } from '../../services/tokenstorage/itokenstorage.service';
import { Router } from '@angular/router';

const INVALID_SERVICE_DEFINITION = 'Invalid Dependency Service Definitions Provided!';
const NAVIGATION_VIEW_AFTER_SIGNOUT = 'home';

@Component({
    moduleId: module.id,
    selector: 'navigation-component',
    templateUrl: 'navigation.component.html',
    styleUrls: ['navigation.component.css']
})
class NavigationComponent implements OnInit {
    public isAuthenticated: boolean = false;
    public userName: string = '';
    public errorMessage: string = '';

    constructor(
        @Inject(USER_PROFILE_SERVICE_TOKEN) private userProfileService: IUserProfileService,
        @Inject(TOKEN_STORAGE_SERVICE_TOKEN) private tokenStorageService: ITokenStorageService,
        private routerService: Router) {
        let validation = this.userProfileService &&
            this.tokenStorageService;

        if (!validation) {
            throw new Error(INVALID_SERVICE_DEFINITION);
        }
    }

    ngOnInit() {
        this.userProfileService
            .getBroadcaster()
            .subscribe(
                data => {
                    this.userName = data.userName;
                    this.isAuthenticated = data.authStatus;
                },
                error => this.errorMessage = `Error Occurred, Details : ${JSON.stringify(error)}`);
    }

    logout() {
        this.tokenStorageService.resetAuthToken();
        this.userProfileService.broadcast(this.userName, false, new Date());
        this.routerService.navigate([NAVIGATION_VIEW_AFTER_SIGNOUT]);
    }
}

export default NavigationComponent;
