import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NgModule } from '@angular/core';
import { DateFnsModule } from 'ngx-date-fns';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './components/app.component';
import { AppHeader } from './components/app-header/app-header.component';
import { ProfileBar } from './components/profile-bar/profile-bar.component';

import { environment } from '../environments/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    DateFnsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    FontAwesomeModule
  ],
  declarations: [
    AppComponent,
    AppHeader,
    ProfileBar
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
