import {importProvidersFrom} from '@angular/core';
import {AppComponent} from './app/app.component';
import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';
import {provideRouter} from "@angular/router";


bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(BrowserModule), provideRouter([])]
}).catch(err => console.error(err));
