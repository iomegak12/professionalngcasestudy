import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'faq-component',
    templateUrl: 'faq.component.html',
    styleUrls: ['faq.component.css']
})
class FaqComponent {
    constructor() {
        console.log('Faq Component Loaded!');
    }
}

export default FaqComponent;
