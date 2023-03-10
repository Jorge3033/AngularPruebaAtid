import { Component } from '@angular/core';
import { IShooterLink } from '../../interfaces/ShooterLink.interface';

@Component({
  selector: 'app-shortter-link-page',
  templateUrl: './shortter-link-page.component.html',
  styleUrls: ['./shortter-link-page.component.css']
})
export class ShortterLinkPageComponent {


  shortUrl: IShooterLink = {} as IShooterLink;

  onShortUrl(shortUrl: IShooterLink) {
    this.shortUrl = shortUrl;
  }

  isActive() {
    return Object.keys(this.shortUrl).length > 0;
  }

}
