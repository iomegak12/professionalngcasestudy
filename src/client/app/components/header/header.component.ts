import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'header-component',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})
class HeaderComponent {
    constructor() {
        console.log('Header Component Loaded!');
    }
}

export default HeaderComponent;
