import {Routes} from "@angular/router";

export const appRoutes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/dashboard'},
    {path: 'dashboard', loadComponent: () => import('src/app/dashboard.component')},
    {path: 'heroes', loadComponent: () => import('src/app/heroes.component')},
    {path: 'detail/:id', loadComponent: () => import('src/app/hero-detail.component')}
];
