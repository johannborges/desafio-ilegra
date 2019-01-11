import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TopbarComponent } from './components/topbar/topbar.component';
import { FilmslistComponent } from './components/films_list/films_list.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { FilmdetailsComponent } from './components/film_details/film_details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    TopbarComponent,
    FilmslistComponent,
    ShowcaseComponent,
    FilmdetailsComponent
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TopbarComponent,
    FilmslistComponent,
    ShowcaseComponent,
    FilmdetailsComponent
  ]
})

export class SharedModule{}