import { InjectionToken } from "@angular/core";

const NOTIFICATION_SERVICE_TOKEN = new InjectionToken<string>('pushNotificationsService');

interface IPushNotificationsService {
    registerCallback(callback: (data: any) => void): void;
}

export {
    NOTIFICATION_SERVICE_TOKEN,
    IPushNotificationsService
};
