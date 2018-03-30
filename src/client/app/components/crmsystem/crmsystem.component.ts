import { Component, InjectionToken, Inject, OnInit } from '@angular/core';
import ICustomerService from '../../services/customerservice/icustomerservice.service';
import Customer from '../../models/crmsystem/customer';

const CUSTOMER_SERVICE_TOKEN = new InjectionToken<ICustomerService>('customerService');
const INVALID_CUSTOMER_SERVICE = 'Invalid Customer Service Specified!';

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
        @Inject(CUSTOMER_SERVICE_TOKEN)
        private customerService: ICustomerService) {
        if (!this.customerService)
            throw new Error(INVALID_CUSTOMER_SERVICE);
    }

    ngOnInit() {
        this.isLoading = true;

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
