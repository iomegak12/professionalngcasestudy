import { Observable } from 'rxjs/Observable';
import Customer from '../../models/crmsystem/customer';

interface ICustomerService {
    getCustomers(): Observable<Customer[]>;
    saveCustomerRecord(customer: Customer): Observable<object>;
}

export default ICustomerService;
