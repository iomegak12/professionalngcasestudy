import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'vacancies-component',
    templateUrl: 'vacancies.component.html',
    styleUrls: ['vacancies.component.css']
})
class VacanciesComponent {
    constructor() {
        console.log('Vacancies Component Loaded!');
    }
}

export default VacanciesComponent;
