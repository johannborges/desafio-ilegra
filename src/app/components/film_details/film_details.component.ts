import { Component, OnInit, Input } from '@angular/core';

import { Films } from '../../models/films';

@Component({
  selector: 'app-film_details',
  templateUrl: './film_details.component.html',
  styleUrls: ['./film_details.component.scss']
})

export class FilmdetailsComponent implements OnInit{
  constructor(){
    
  }

  @Input() film: Films;

  ngOnInit(){
    
  }
}