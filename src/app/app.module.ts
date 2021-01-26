import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';

import { SharedModule } from './shared/shared.module';

import { RoutesModule } from './shared/routes.module';

import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';


@NgModule({
  imports: [
    RoutesModule,
    SharedModule,
    HomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
