import { InjectionToken } from "@angular/core";
import { Subject } from "rxjs/Subject";

interface IUserProfileService {
    isAuthenticated: boolean;
    userName: string;
    loginTime: Date;

    broadcast(userName: string, authStatus: boolean, loginTime: Date): void;
    getBroadcaster(): Subject<any>;
}

const USER_PROFILE_SERVICE_TOKEN = new InjectionToken<IUserProfileService>('userProfileService');

export {
    USER_PROFILE_SERVICE_TOKEN,
    IUserProfileService
};
