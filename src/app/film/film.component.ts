import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Films } from '../models/films';
import { FilmsService } from '../services/films.service';

import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})

export class FilmComponent implements OnInit{
  constructor(
    private filmsService: FilmsService,
    private charactersService: CharactersService,
    private activatedRoute: ActivatedRoute
  ){
    this.filmId = this.activatedRoute.snapshot.paramMap.get("id");
  }

  film: Films;
  filmId;

  ngOnInit(){
    this.getFilm(this.filmId);
  }

  getFilm(id){
    this.filmsService.getFilmById(id)
      .subscribe((data) => {
        this.film = data;

        for(let character in this.film.characters){
          this.charactersService.getCharacterByURL(this.film.characters[character]).subscribe((chardata) => {
            this.film.characters[character] = chardata;
          });

          let interval = setInterval(() => {
            if(typeof this.film.characters[character] !== "string")
              clearInterval(interval);
          }, 100);
        }
        console.log(this.film);
      }, (err) => {
        console.log(err);
      });
  }
}