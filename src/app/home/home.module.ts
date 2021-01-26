import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReposComponent } from './components/repos/repos.component';

import { GithubService } from './services/github.service';

import { ProfileService } from './services/profile.service';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    ProfileComponent,
    ReposComponent
  ],
  exports: [
    HomeComponent
  ],
  providers: [GithubService, ProfileService],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
