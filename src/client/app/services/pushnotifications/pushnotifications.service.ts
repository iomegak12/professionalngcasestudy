import { IPushNotificationsService } from "./ipushnotifications.service";
import { InjectionToken, Inject } from "@angular/core";

declare class io {
    static connect(url: string): any;
}

const KNOWN_EVENTS: any = {
    NewCustomerRecord: 'NewCustomerRecord'
};

const NOTIFICATION_SERVICE_URL_TOKEN: InjectionToken<string> =
    new InjectionToken<string>('notificationServiceUrl');

class PushNotificationsService implements IPushNotificationsService {
    private registeredCallbacks: ((data: any) => void)[] = [];

    constructor(@Inject(NOTIFICATION_SERVICE_URL_TOKEN) private notificationServiceUrl: string) {
        this.initializeNotificationEventListeners();
    }

    initializeNotificationEventListeners() {
        let socketClient = io.connect(this.notificationServiceUrl);

        if (socketClient) {
            for (let eventProperty in KNOWN_EVENTS) {
                let eventName = KNOWN_EVENTS[eventProperty];

                socketClient.on(eventName,
                    (notificationData: any) => {
                        if (notificationData) {
                            this.registeredCallbacks.forEach(
                                registeredCallback => {
                                    if (registeredCallback) {
                                        registeredCallback(notificationData);
                                    }
                                });
                        }
                    });
            }
        }
    }

    registerCallback(callback: (data: any) => void): void {
        if (callback) {
            this.registeredCallbacks.push(callback);
        }
    }
}

export {
    NOTIFICATION_SERVICE_URL_TOKEN,
    PushNotificationsService
};
