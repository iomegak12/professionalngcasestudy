import { Component, Input } from "@angular/core";
import Customer from "../../models/crmsystem/customer";

@Component({
    moduleId: module.id,
    selector: 'customerdetailviewer-component',
    templateUrl: 'customerdetailviewer.component.html',
    styleUrls: ['customerdetailviewer.component.css']
})
class CustomerDetailViewerComponent {
    @Input()
    public customerDetail: Customer;
}

export default CustomerDetailViewerComponent;
