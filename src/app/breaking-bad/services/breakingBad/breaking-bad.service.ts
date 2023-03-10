import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from '../../interfaces/BreakingBad.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BreakingBadService {

  private readonly API_URL = 'https://api.breakingbadquotes.xyz/v1/';

  constructor( private http: HttpClient  ) { }

  getQuotes(quantity: number = 10): Observable<Quote[]> {
    //implements no cors policy

    return this.http.get<Quote[]>(`${this.API_URL}quotes/${quantity}`);
  }

}
