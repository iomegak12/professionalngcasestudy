import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'footer-component',
    templateUrl: 'footer.component.html',
    styleUrls: ['footer.component.css']
})
class FooterComponent {
    constructor() {
        console.log('Footer Component Loaded!');
    }
}

export default FooterComponent;
