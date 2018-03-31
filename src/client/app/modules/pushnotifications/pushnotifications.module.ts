import { NgModule } from "@angular/core";
import { NOTIFICATION_SERVICE_URL_TOKEN, PushNotificationsService } from "../../services/pushnotifications/pushnotifications.service";
import { NOTIFICATION_SERVICE_TOKEN } from "../../services/pushnotifications/ipushnotifications.service";

@NgModule({
    providers: [
        {
            provide: NOTIFICATION_SERVICE_URL_TOKEN,
            useFactory: () => {
                let buildType = String('<%= BUILD_TYPE %>');
                let notificationServiceUrl = '';

                if (buildType === 'prod') {
                    notificationServiceUrl = String('<%= PROD_NOTIFICATION_SERVICE_URL %>');
                } else {
                    notificationServiceUrl = String('<%= DEV_NOTIFICATION_SERVICE_URL %>');
                }

                return notificationServiceUrl;
            }
        },
        {
            provide: NOTIFICATION_SERVICE_TOKEN,
            useClass: PushNotificationsService
        }
    ]
})
class PushNotificationsModule {
    constructor() {
        console.log('Push Notifications Module Initialized!');
    }
}

export default PushNotificationsModule;
