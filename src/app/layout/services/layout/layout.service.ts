import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  sideBarState: boolean = false;
  constructor() { }

}
