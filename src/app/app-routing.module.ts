import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FilmComponent } from './film/film.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'film/:id', component: FilmComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            { useHash: true }
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{}