import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'boot-component',
    templateUrl: 'boot.component.html',
    styleUrls: ['boot.component.css']
})
class BootComponent {
    constructor() {
        console.log('Boot Component Loaded!');
    }
}

export default BootComponent;
