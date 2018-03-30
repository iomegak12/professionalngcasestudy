import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import './operators';

import BootModule from './modules/boot/boot.module';

const buildType = String('<%= BUILD_TYPE %>');

if (buildType === 'prod') {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(BootModule);
