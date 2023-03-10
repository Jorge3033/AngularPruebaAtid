import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryData } from '../../interfaces/CountryData.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private readonly API_URL = 'https://api.first.org/data/v1';
  
  constructor( private http: HttpClient  ) { }
  
  getCountries(): Observable<CountryData> {
    return this.http.get<CountryData>(`${this.API_URL}/countries?region=africa&limit=10&pretty=true`, {
      headers: {
        "Accept": "application/json",
      }
    });
  }

}
