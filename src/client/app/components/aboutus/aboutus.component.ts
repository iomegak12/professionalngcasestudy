import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'aboutus-component',
    templateUrl: 'aboutus.component.html',
    styleUrls: ['aboutus.component.css']
})
class AboutusComponent {
    constructor() {
        console.log('Aboutus Component Loaded!');
    }
}

export default AboutusComponent;
