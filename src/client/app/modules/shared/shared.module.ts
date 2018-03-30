import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import HeaderComponent from '../../components/header/header.component';
import FooterComponent from '../../components/footer/footer.component';
import LayoutComponent from '../../components/layout/layout.component';
import NavigationComponent from '../../components/navigation/navigation.component';
import ContactAddressComponnet from '../../components/contactaddress/contactaddress.component';
import FaqComponent from '../../components/faq/faq.component';
import SocialLinksComponent from '../../components/sociallinks/sociallinks.component';
import ReasonsComponent from '../../components/reasons/reasons.component';
import HomeComponent from '../../components/home/home.component';
import AboutusComponent from '../../components/aboutus/aboutus.component';
import VacanciesComponent from '../../components/vacancies/vacancies.component';

import sharedRouteDefinition from '../../routing/shared/shared.routes';

@NgModule({
    imports: [RouterModule, sharedRouteDefinition],
    declarations: [
        LayoutComponent,
        ContactAddressComponnet,
        HomeComponent, FaqComponent, ReasonsComponent, SocialLinksComponent,
        AboutusComponent,VacanciesComponent,
        HeaderComponent, NavigationComponent, FooterComponent
    ],
    exports: [LayoutComponent]
})
class SharedModule {
    constructor() {
        console.log('Shared Module Initialized!');
    }
}

export default SharedModule;
