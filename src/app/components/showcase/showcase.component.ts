import { Component, OnInit, Input } from '@angular/core';

import { Films } from '../../models/films';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})

export class ShowcaseComponent implements OnInit{
  constructor(){
    
  }

  @Input() showcase: Films;
  @Input() hasButton: boolean;

  ngOnInit(){
  }
}