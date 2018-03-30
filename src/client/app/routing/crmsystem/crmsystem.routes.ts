import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CrmSystemComponent } from '../../components/crmsystem/crmsystem.component';

const crmSystemRouteEntries =
    [
        {
            path: 'crm-system',
            component: CrmSystemComponent
        }
    ];

const crmSystemRouteDefinition =
    RouterModule.forRoot(crmSystemRouteEntries, {
        useHash: false
    });

export default crmSystemRouteDefinition;
