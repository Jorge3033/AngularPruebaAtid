import { Component, ViewChild, Input } from '@angular/core';
import { NavItems } from '../../interfaces/items.interface';
import { MatDrawer } from '@angular/material/sidenav';
import { Layout, SideNav } from '../../interfaces/Layout.interface';
import { LayoutService } from '../../services/layout/layout.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent extends Layout implements SideNav {
  

  @Input() drawer!: MatDrawer;

  panelOpenState: boolean = false;

  public navItems: NavItems[] = [
    {
      title: 'BreakingBad',
      icon: 'people',
      childrens: [
        {
          title: 'Quotes',
          icon: 'person',
          route: 'quotes',
        },
        {
          title: 'reservacion',
          icon: 'person',
          route: 'reservacion',
        },
      ]
    },
    {
      title: 'ShortterLink',
        icon: 'admin_panel_settings',
        childrens: [
          {
            title: 'generar link',
            icon: 'add_link',
            route: 'shortterlink',
          },
        ]
    }
  ]

  constructor(layoutService: LayoutService = new LayoutService()) {
    super(layoutService)
  }

  toggleSideBar() {
    this.layoutService.sideBarState = !this.layoutService.sideBarState
    this.drawer.toggle()
  }

}

