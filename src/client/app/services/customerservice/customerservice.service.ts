import { Injectable, Inject, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import Customer from '../../models/crmsystem/customer';
import ICustomerService from './icustomerservice.service';

const INVALID_HTTP_CLIENT = 'Invalid Http Client Specified!';
const CUSTOMER_SERVICE_URL_TOKEN = new InjectionToken<string>('customerServiceBaseUrl');

@Injectable()
class CustomerService implements ICustomerService {
    constructor(
        private httpClient: HttpClient,
        @Inject(CUSTOMER_SERVICE_URL_TOKEN) private customerServiceBaseUrl: string) { }

    getCustomers(): Observable<Customer[]> {
        if (!this.httpClient)
            throw new Error(INVALID_HTTP_CLIENT);

        let customerServiceUrl = `${this.customerServiceBaseUrl}/api/customers`;
        let customers = this.httpClient
            .get<Customer[]>(customerServiceUrl);

        return customers;
    }
}

export {
    CUSTOMER_SERVICE_URL_TOKEN,
    CustomerService
};
