import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'sociallinks-component',
    templateUrl: 'sociallinks.component.html',
    styleUrls: ['sociallinks.component.css']
})
class SocialLinksComponent {
    constructor() {
        console.log('SocialLinks Component Loaded!');
    }
}

export default SocialLinksComponent;
