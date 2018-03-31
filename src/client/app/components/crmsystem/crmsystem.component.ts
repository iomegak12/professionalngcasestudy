import { Component, InjectionToken, Inject, OnInit } from '@angular/core';
import ICustomerService from '../../services/customerservice/icustomerservice.service';
import Customer from '../../models/crmsystem/customer';
import { IPushNotificationsService, NOTIFICATION_SERVICE_TOKEN } from '../../services/pushnotifications/ipushnotifications.service';

const CUSTOMER_SERVICE_TOKEN = new InjectionToken<ICustomerService>('customerService');
const INVALID_CUSTOMER_SERVICE = 'Invalid Customer Service Specified!';
const INVALID_PUSH_NOTIFICATIONS_SERVICE = 'Invalid Push Notifications Service Specified!';

@Component({
    moduleId: module.id,
    selector: 'crmsystem-component',
    templateUrl: 'crmsystem.component.html',
    styleUrls: ['crmsystem.component.css']
})
class CrmSystemComponent implements OnInit {
    public customers: Customer[] = [];
    public errorMessage: string = '';
    public isLoading: boolean = false;

    constructor(
        @Inject(CUSTOMER_SERVICE_TOKEN) private customerService: ICustomerService,
        @Inject(NOTIFICATION_SERVICE_TOKEN) private pushNotificationsService: IPushNotificationsService) {
        if (!this.customerService)
            throw new Error(INVALID_CUSTOMER_SERVICE);

        if (!this.pushNotificationsService) {
            throw new Error(INVALID_PUSH_NOTIFICATIONS_SERVICE);
        }
    }

    ngOnInit() {
        this.isLoading = true;

        this.pushNotificationsService.registerCallback(
            data => {
                let customer = new Customer(
                    data.id,
                    data.name, data.address, data.credit,
                    data.status, data.email, data.phone, data.remarks);

                this.customers.push(customer);
            });

        this.customerService
            .getCustomers()
            .subscribe(
                data => this.customers = data,
                error => this.errorMessage = 'Error Occurred, Details : ' + JSON.stringify(error),
                () => this.isLoading = false);
    }
}

export {
    CUSTOMER_SERVICE_TOKEN,
    CrmSystemComponent
};
