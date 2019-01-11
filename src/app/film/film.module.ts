import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmComponent } from './film.component';

import { SharedModule } from '../shared.module';
import { FilmsService } from '../services/films.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    FilmComponent
  ],
  providers: [FilmsService]
})

export class FilmModule{}