import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section id="home">
      <profile-bar></profile-bar>
      <main class="container">
        <app-repos></app-repos>
      </main>
    </section>
  `,
  styles: [`
    #home {
      width: 100%;
      height: 100%;
      background: #282a36;
      margin: 0;
    }
  `]
})
export class HomeComponent {
}
