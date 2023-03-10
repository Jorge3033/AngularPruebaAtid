import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IShooterLinkRootObject } from '../interfaces/ShooterLink.interface';

@Injectable({
  providedIn: 'root'
})
export class ShortterLinkService {

  private readonly API_URL = 'https://api.shrtco.de/v2';

  constructor( private http: HttpClient  ) { }

  getShortUrl( url: string ): Observable<IShooterLinkRootObject>{
    return this.http.get<IShooterLinkRootObject>(`${this.API_URL}/shorten?url=${url}`);
  }

}
