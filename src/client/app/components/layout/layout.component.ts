import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'layout-component',
    templateUrl: 'layout.component.html',
    styleUrls: ['layout.component.css']
})
class LayoutComponent {
    constructor() {
        console.log('Layout Component Loaded!');
    }
}

export default LayoutComponent;
