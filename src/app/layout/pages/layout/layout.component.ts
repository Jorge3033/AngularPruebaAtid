import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { LayoutService } from '../../services/layout/layout.service';
import { Layout } from '../../interfaces/Layout.interface';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent extends Layout {

  showFiller: boolean = false;

  constructor( layoutService: LayoutService = new LayoutService() ) {
    super(layoutService)
  }

  toggleSideBar(drawer: MatDrawer) {
    this.onSideNavClose()
    drawer.toggle()
  }

  onSideNavClose(): void {
    console.log('object')
    this.layoutService.sideBarState = !this.layoutService.sideBarState;
  }

}
