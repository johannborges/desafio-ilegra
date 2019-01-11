import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Films } from '../models/films';

@Injectable({ providedIn: 'root' })

export class FilmsService {
  resource: string = `${environment.url}`;

  constructor(private http: HttpClient) {
  }

  getFilmById(id: number): Observable<Films> {
    return this.http.get<Films>(`${this.resource}films/${id}`);
  }

  getAllFilms(): Observable<any> {  
    return this.http.get<any>(`${this.resource}films`);
  }
}