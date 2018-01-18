import './polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from "./app.module";

/**
 * this line starts the angular application
 */
platformBrowserDynamic().bootstrapModule(AppModule);