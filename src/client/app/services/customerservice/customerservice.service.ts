import { Injectable, Inject, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import Customer from '../../models/crmsystem/customer';
import ICustomerService from './icustomerservice.service';

const INVALID_HTTP_CLIENT = 'Invalid Http Client Specified!';
const INVALID_ARGUMENTS = 'Invalid Argument(s) Specified!';
const CUSTOMER_SERVICE_URL_TOKEN = new InjectionToken<string>('customerServiceBaseUrl');

@Injectable()
class CustomerService implements ICustomerService {
    private customerServiceUrl: string = '';
    constructor(
        private httpClient: HttpClient,
        @Inject(CUSTOMER_SERVICE_URL_TOKEN) private customerServiceBaseUrl: string) {

        if (!customerServiceBaseUrl) {
            throw new Error(INVALID_ARGUMENTS);
        }

        this.customerServiceUrl = `${this.customerServiceBaseUrl}/api/customers`;
    }

    getCustomers(): Observable<Customer[]> {
        if (!this.httpClient)
            throw new Error(INVALID_HTTP_CLIENT);

        let customers = this.httpClient
            .get<Customer[]>(this.customerServiceUrl);

        return customers;
    }

    saveCustomerRecord(customer: Customer): Observable<object> {
        if (!customer) {
            throw new Error(INVALID_ARGUMENTS);
        }

        let responseObject = this.httpClient.post(this.customerServiceUrl, customer);

        return responseObject;
    }
}

export {
    CUSTOMER_SERVICE_URL_TOKEN,
    CustomerService
};
