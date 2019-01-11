import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';

import { SharedModule } from '../shared.module';
import { FilmsService } from '../services/films.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [FilmsService]
})

export class HomeModule{}