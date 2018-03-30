import { Component, Input } from "@angular/core";
import Customer from "../../models/crmsystem/customer";

@Component({
    moduleId: module.id,
    selector: 'customerviewer-component',
    templateUrl: 'customerviewer.component.html',
    styleUrls: ['customerviewer.component.css']
})
class CustomerViewerComponent {
    @Input()
    public customerInfo: Customer;
}

export default CustomerViewerComponent;
