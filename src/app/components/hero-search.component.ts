import {Component, inject, signal} from '@angular/core';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {HeroService} from "../services/hero.service";
import {AsyncPipe, NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {fromSignal} from "../utils/utils";

@Component({
    selector: 'app-hero-search',
    standalone: true,
    imports: [
        NgForOf,
        AsyncPipe,
        RouterLink
    ],
    template: `
        <div id="search-component">
            <label for="search-box">Hero Search</label>
            <input #searchBox id="search-box" (input)="searchTerms.set(searchBox.value)"/>

            <ul class="search-result">
                <li *ngFor="let hero of heroes$ | async">
                    <a routerLink="/detail/{{hero.id}}">
                        {{hero.name}}
                    </a>
                </li>
            </ul>
        </div>
    `,
    styles: [`
      /* HeroSearch private styles */
      label {
        display: block;
        font-weight: bold;
        font-size: 1.2rem;
        margin-top: 1rem;
        margin-bottom: .5rem;

      }

      input {
        padding: .5rem;
        width: 100%;
        max-width: 600px;
        box-sizing: border-box;
        display: block;
      }

      input:focus {
        outline: #336699 auto 1px;
      }

      li {
        list-style-type: none;
      }

      .search-result li a {
        border-bottom: 1px solid gray;
        border-left: 1px solid gray;
        border-right: 1px solid gray;
        display: inline-block;
        width: 100%;
        max-width: 600px;
        padding: .5rem;
        box-sizing: border-box;
        text-decoration: none;
        color: black;
      }

      .search-result li a:hover {
        background-color: #435A60;
        color: white;
      }

      ul.search-result {
        margin-top: 0;
        padding-left: 0;
      }
    `]
})
export class HeroSearchComponent {
    private heroService = inject(HeroService);

    searchTerms = signal<string>('');
    heroes$ = fromSignal(this.searchTerms).pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
}
