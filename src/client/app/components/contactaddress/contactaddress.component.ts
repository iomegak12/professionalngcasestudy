import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'contactaddress-component',
    templateUrl: 'contactaddress.component.html',
    styleUrls: ['contactaddress.component.css']
})
class ContactAddressComponent {
    constructor() {
        console.log('ContactAddress Component Loaded!');
    }
}

export default ContactAddressComponent;
