import { Input, Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'searchpanel-component',
    templateUrl: 'searchpanel.component.html',
    styleUrls: ['searchpanel.component.css']
})
class SearchPanelComponent {
    @Input()
    public searchString: string = '';
}

export default SearchPanelComponent;
