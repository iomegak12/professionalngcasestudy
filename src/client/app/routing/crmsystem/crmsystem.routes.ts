import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CrmSystemComponent } from '../../components/crmsystem/crmsystem.component';
import { NewCustomerComponent } from '../../components/newcustomer/newcustomer.component';

const crmSystemRouteEntries =
    [
        {
            path: 'crm-system',
            component: CrmSystemComponent
        },
        {
            path: 'new-customer',
            component: NewCustomerComponent
        }
    ];

const crmSystemRouteDefinition =
    RouterModule.forRoot(crmSystemRouteEntries, {
        useHash: false
    });

export default crmSystemRouteDefinition;
