import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DateFnsModule } from 'ngx-date-fns';

import { AppHeaderComponent } from './components/app-header/app-header.component';


@NgModule({
  imports: [
    CommonModule,
    DateFnsModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  declarations: [
    AppHeaderComponent,
  ],
  exports: [
    AppHeaderComponent,
    CommonModule,
    DateFnsModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
