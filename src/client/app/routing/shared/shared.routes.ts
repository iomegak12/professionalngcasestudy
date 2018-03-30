import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import HomeComponent from '../../components/home/home.component';
import AboutusComponent from '../../components/aboutus/aboutus.component';

const sharedRouteEntries =
    [
        {
            path: 'home',
            component: HomeComponent
        },
        {
            path: 'about-us',
            component: AboutusComponent
        },
        {
            path: '',
            redirectTo: '/home',
            pathMatch: 'full'
        }
    ];

const sharedRouteDefinition: ModuleWithProviders =
    RouterModule.forRoot(sharedRouteEntries, {
        useHash: false
    });

export default sharedRouteDefinition;
