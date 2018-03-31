import { Component, Inject, InjectionToken } from "@angular/core";
import { FormGroup } from "@angular/forms";
import ICustomerService from "../../services/customerservice/icustomerservice.service";
import customerModel from './newcustomer.model';
import { Router } from "@angular/router";

const NEW_CUSTOMER_SERVICE_TOKEN = new InjectionToken<ICustomerService>('customerService');
const NAVIGATION_VIEW_AFTER_SAVE = 'crm-system';

@Component({
    moduleId: module.id,
    selector: 'newcustomer-component',
    templateUrl: 'newcustomer.component.html',
    styleUrls: ['newcustomer.component.css']
})
class NewCustomerComponent {
    public customerModel: FormGroup;
    public isProcessing: boolean = false;
    public errorMessage: string = '';
    public status: boolean = false;

    constructor(
        private routerService: Router,
        @Inject(NEW_CUSTOMER_SERVICE_TOKEN) private customerService: ICustomerService) {
        this.customerModel = customerModel;
    }

    saveCustomer() {
        this.isProcessing = true;

        this.customerService
            .saveCustomerRecord(this.customerModel.value)
            .subscribe(
                result => {
                    if (result) {
                        let responseObject = (<any>result);

                        this.status = responseObject && responseObject.status && responseObject.status.id;

                        if (this.status) {
                            this.routerService.navigate([NAVIGATION_VIEW_AFTER_SAVE]);
                        }
                    }
                },
                error => this.errorMessage = `Error Occurred in Save ... Details : ${JSON.stringify(error)}`,
                () => this.isProcessing = false);
    }
}

export {
    NEW_CUSTOMER_SERVICE_TOKEN,
    NewCustomerComponent
};
