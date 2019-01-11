import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Characters } from '../models/characters';

@Injectable({ providedIn: 'root' })

export class CharactersService {
  resource: string = `${environment.url}`;

  constructor(private http: HttpClient) {
  }

  getCharacterById(id: number): Observable<Characters> {
    return this.http.get<Characters>(`${this.resource}people/${id}`);
  }

  getCharacterByURL(url: string): Observable<Characters> {
    return this.http.get<Characters>(url);
  }
}