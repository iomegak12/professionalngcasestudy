import { NgModule, Inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import SharedModule from '../shared/shared.module';
import CrmSystemModule from '../crmsystem/crmsystem.module';
import BootComponent from '../../components/boot/boot.component';
import JsonHttpHeadersInterceptor from '../../extensibility/jsonhttpheaders.interceptor';
import SecurityModule from '../security/security.module';
import { ITokenStorageService, TOKEN_STORAGE_SERVICE_TOKEN } from '../../services/tokenstorage/itokenstorage.service';

@NgModule({
    declarations: [BootComponent],
    imports: [BrowserModule, HttpClientModule,
        SecurityModule,
        SharedModule, CrmSystemModule],
    exports: [BootComponent],
    bootstrap: [BootComponent],
    providers:
        [
            {
                provide: HTTP_INTERCEPTORS,
                useClass: JsonHttpHeadersInterceptor,
                multi: true
            }
        ]
})
class BootModule {
    constructor(@Inject(TOKEN_STORAGE_SERVICE_TOKEN) private tokenStorageService: ITokenStorageService) {
        console.log('Boot Module Initialized!');

        if (this.tokenStorageService) {
            this.tokenStorageService.resetAuthToken();
        }
    }
}

export default BootModule;
