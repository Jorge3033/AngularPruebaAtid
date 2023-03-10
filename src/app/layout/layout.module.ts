import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './pages/layout/layout.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { NavItemComponent } from './components/sidebar/nav-item/nav-item.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    LayoutComponent,
    SidebarComponent,
    NavItemComponent
  ],
  imports: [
  CommonModule,
    RouterModule,
    MatSidenavModule,
    MatIconModule,
    MatExpansionModule,
    MatBadgeModule,
    MatDialogModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
