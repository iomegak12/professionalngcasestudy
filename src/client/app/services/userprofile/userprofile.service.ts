import { IUserProfileService } from "./iuserprofile.service";
import { Subject } from "rxjs/Subject";

class UserProfileService implements IUserProfileService {
    private broadcaster: Subject<any>;
    private userProfileName: string;
    private authStatus: boolean;
    private loggedInTime: Date;

    constructor() {
        this.broadcaster = new Subject<any>();
    }

    get isAuthenticated() {
        return this.authStatus;
    }

    get userName() {
        return this.userProfileName;
    }

    get loginTime() {
        return this.loggedInTime;
    }

    broadcast(userName: string, authStatus: boolean, loginTime: Date): void {
        this.userProfileName = userName;
        this.authStatus = authStatus;
        this.loggedInTime = loginTime;

        this.broadcaster.next({
            authStatus: this.authStatus,
            userName: this.userProfileName,
            loginTime: this.loggedInTime
        });
    }

    getBroadcaster(): Subject<any> {
        return this.broadcaster;
    }
}

export default UserProfileService;
