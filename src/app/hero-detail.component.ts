import {Component, inject} from '@angular/core';
import {Location, NgIf, UpperCasePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HeroService} from "./services/hero.service";
import {ActivatedRoute} from "@angular/router";
import {Hero} from "./models/hero.model";
import {fromObservable} from "./utils/utils";

@Component({
    selector: 'app-hero-detail',
    standalone: true,
    imports: [
        NgIf,
        FormsModule,
        UpperCasePipe,
    ],
    template: `
        <div *ngIf="hero() as hero">
            <h2>{{hero.name | uppercase}} Details</h2>
            <div><span>id: </span>{{hero.id}}</div>
            <div>
                <label for="hero-name">Hero name: </label>
                <input id="hero-name" [(ngModel)]="hero.name" placeholder="Hero name"/>
            </div>
            <button type="button" (click)="goBack()">Go back</button>
            <button type="button" (click)="save()">Save</button>
        </div>
    `,
    styles: [`
      /* HeroDetailComponent's private CSS styles */
      label {
        color: #435960;
        font-weight: bold;
      }

      input {
        font-size: 1em;
        padding: .5rem;
      }

      button {
        margin-top: 20px;
        margin-right: .5rem;
        background-color: #eee;
        padding: 1rem;
        border-radius: 4px;
        font-size: 1rem;
      }

      button:hover {
        background-color: #cfd8dc;
      }

      button:disabled {
        background-color: #eee;
        color: #ccc;
        cursor: auto;
      }
    `],
})
export default class HeroDetailComponent {
    private activatedRoute = inject(ActivatedRoute);
    private heroService = inject(HeroService);
    private location = inject(Location);

    hero = fromObservable(this.heroService.getHero(Number(this.activatedRoute.snapshot.paramMap.get('id'))), undefined);

    goBack(): void {
        this.location.back();
    }

    save(): void {
        if (this.hero()) {
            this.heroService.updateHero(this.hero() as Hero)
                .subscribe(() => this.goBack());
        }
    }
}
