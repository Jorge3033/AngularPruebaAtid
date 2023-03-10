import { LayoutService } from '../services/layout/layout.service';
import { MatDrawer } from '@angular/material/sidenav';
export abstract class Layout {
  constructor(protected layoutService: LayoutService) {}
}

export interface SideNav {
  drawer: MatDrawer;
  toggleSideBar(): void;
}