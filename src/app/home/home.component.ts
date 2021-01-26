import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-header></app-header>
    <profile-bar></profile-bar>
    <main class="container">
      <app-repos></app-repos>
    </main>
  `,
})
export class HomeComponent {
}
