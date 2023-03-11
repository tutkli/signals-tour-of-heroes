import {Component} from '@angular/core';
import {MessagesComponent} from "./components/messages.component";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        MessagesComponent,
        RouterLink,
        RouterOutlet
    ],
    template: `
        <h1>{{ title }}</h1>
        <nav>
            <a routerLink="/dashboard">Dashboard</a>
            <a routerLink="/heroes">Heroes</a>
        </nav>
        <router-outlet/>
        <app-messages/>
    `,
    styles: [`
      /* AppComponent's private CSS styles */
      h1 {
        margin-bottom: 0;
      }

      nav a {
        padding: 1rem;
        text-decoration: none;
        margin-top: 10px;
        margin-left: 10px;
        display: inline-block;
        background-color: #e8e8e8;
        color: #3d3d3d;
        border-radius: 4px;
      }

      nav a:hover {
        color: white;
        background-color: #42545C;
      }

      nav a:active {
        background-color: black;
      }
    `],
})
export class AppComponent {
    title = 'Signals Tour of Heroes';
}
