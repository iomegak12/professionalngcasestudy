import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import LoginComponent from '../../components/login/login.component';

const securityRouteEntries =
    [
        {
            path: 'login',
            component: LoginComponent
        }
    ];

const securityRouteDefinition =
    RouterModule.forRoot(securityRouteEntries, {
        useHash: false
    });

export default securityRouteDefinition;
