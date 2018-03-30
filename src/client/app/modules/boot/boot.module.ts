import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import SharedModule from '../shared/shared.module';
import CrmSystemModule from '../crmsystem/crmsystem.module';
import BootComponent from '../../components/boot/boot.component';
import JsonHttpHeadersInterceptor from '../../extensibility/jsonhttpheaders.interceptor';

@NgModule({
    declarations: [BootComponent],
    imports: [BrowserModule, HttpClientModule, SharedModule, CrmSystemModule],
    exports: [BootComponent],
    bootstrap: [BootComponent],
    providers:
        [
            {
                provide: HttpClient,
                useClass: HttpClient
            },
            {
                provide: HTTP_INTERCEPTORS,
                useClass: JsonHttpHeadersInterceptor,
                multi: true
            }
        ]
})
class BootModule {
    constructor() {
        console.log('Boot Module Initialized!');
    }
}

export default BootModule;
