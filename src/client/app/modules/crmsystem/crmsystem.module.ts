import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpHandler, HTTP_INTERCEPTORS, HttpBackend } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import crmSystemRouteDefinition from '../../routing/crmsystem/crmsystem.routes';
import ICustomerService from '../../services/customerservice/icustomerservice.service';
import CustomerViewerComponent from '../../components/customerviewer/customerviewer.component';
import SearchPanelComponent from '../../components/searchpanel/searchpanel.component';
import CustomerDetailViewerComponent from '../../components/customerdetailviewer/customerdetailviewer.component';
import StringTrimPipe from '../../pipes/strtrim/strtrim.pipe';
import PhotoUrlPipe from '../../pipes/photourl/photourl.pipe';
import WherePipe from '../../pipes/where/where.pipe';
import SymbolPipe from '../../pipes/symbol/symbol.pipe';
import PushNotificationsModule from '../pushnotifications/pushnotifications.module';

import { CUSTOMER_SERVICE_TOKEN, CrmSystemComponent } from '../../components/crmsystem/crmsystem.component';
import { CUSTOMER_SERVICE_URL_TOKEN, CustomerService } from '../../services/customerservice/customerservice.service';
import { NEW_CUSTOMER_SERVICE_TOKEN, NewCustomerComponent } from '../../components/newcustomer/newcustomer.component';

@NgModule({
    imports:
        [
            CommonModule, FormsModule, ReactiveFormsModule,
            RouterModule, crmSystemRouteDefinition,
            PushNotificationsModule
        ],
    declarations: [CrmSystemComponent, CustomerViewerComponent,
        NewCustomerComponent,
        CustomerDetailViewerComponent,
        SearchPanelComponent,
        StringTrimPipe, PhotoUrlPipe, WherePipe, SymbolPipe],
    providers: [
        {
            provide: CUSTOMER_SERVICE_TOKEN,
            useClass: CustomerService
        },
        {
            provide: NEW_CUSTOMER_SERVICE_TOKEN,
            useClass: CustomerService
        },
        {
            provide: CUSTOMER_SERVICE_URL_TOKEN,
            useFactory: () => {
                let buildType = String('<%= BUILD_TYPE %>');
                let serviceUrl = '';

                if (buildType === 'prod') {
                    serviceUrl = String('<%= PROD_CUSTOMER_SERVICE_URL %>');
                } else {
                    serviceUrl = String('<%= DEV_CUSTOMER_SERVICE_URL %>');
                }

                return serviceUrl;
            }
        }
    ]
})
class CrmSystemModule {
    constructor() {
        console.log('Crm System Module Initialized!');
    }
}

export default CrmSystemModule;
