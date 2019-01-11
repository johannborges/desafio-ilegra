import { Component, OnInit } from '@angular/core';

import { Films } from '../models/films';
import { FilmsService } from '../services/films.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{
  constructor(private filmsService: FilmsService){
    
  }

  films: Films[] = [];
  showcase: Films;

  ngOnInit(){
    this.getFilms();
  }

  getFilms(){
    this.filmsService.getAllFilms()
      .subscribe((data) => {
        for(let film of data.results){
          let id: number;

          switch(film.episode_id){
            case 1:
              id = 4;
            break;

            case 2:
              id = 5;
            break;

            case 3:
              id = 6;
            break;

            case 4:
              id = 1;
            break;

            case 5:
              id = 2;
            break;

            case 6:
              id = 3;
            break;

            case 7:
              id = 7;
            break;
          }

          film.id = id;
          this.films[id - 1] = film;
        }

        this.showcase = this.films[0];
      }, (err) => {
        console.log(err);
      });
  }

  changeShowcase(film: number){
    this.showcase = this.films[film];
  }
}