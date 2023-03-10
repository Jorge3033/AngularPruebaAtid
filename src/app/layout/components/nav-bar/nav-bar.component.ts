import { Component, Input } from '@angular/core';
import { Layout, SideNav } from '../../interfaces/Layout.interface';
import { MatDrawer } from '@angular/material/sidenav';
import { LayoutService } from '../../services/layout/layout.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent extends Layout implements SideNav{

  @Input() drawer!: MatDrawer;

  constructor( layoutService: LayoutService = new LayoutService()) {
    super(layoutService)
  }

  toggleSideBar(): void {
    this.layoutService.sideBarState = !this.layoutService.sideBarState
    this.drawer.toggle()
  }


}
