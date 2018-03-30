import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'reasons-component',
    templateUrl: 'reasons.component.html',
    styleUrls: ['reasons.component.css']
})
class ReasonsComponent {
    constructor() {
        console.log('Reasons Component Loaded!');
    }
}

export default ReasonsComponent;
