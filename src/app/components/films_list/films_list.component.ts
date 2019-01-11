import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Films } from '../../models/films';

@Component({
  selector: 'app-films_list',
  templateUrl: './films_list.component.html',
  styleUrls: ['./films_list.component.scss']
})

export class FilmslistComponent{
  constructor(){
    
  }

  @Input() films: Films;
  @Output() changeShowcaseChild: EventEmitter<number> = new EventEmitter();

  changeShowcase(id: number){
    this.changeShowcaseChild.emit(id);
  }
}