import { Component, Input } from '@angular/core';
import { NavItems } from '../../../interfaces/items.interface';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent {

  @Input() navItems: NavItems = {} as NavItems

  panelOpenState: boolean = false;
}
