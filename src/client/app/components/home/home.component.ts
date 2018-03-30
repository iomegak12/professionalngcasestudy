import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'home-component',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})
class HomeComponent {
    constructor() {
        console.log('Home Component Loaded!');
    }
}

export default HomeComponent;
