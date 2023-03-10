import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { QuotesPageComponent } from './breaking-bad/pages/quotes-page/quotes-page.component';
import { ReservationPageComponent } from './breaking-bad/pages/reservation-page/reservation-page.component';
import { ShortterLinkPageComponent } from './shortter-link/pages/shortter-link-page/shortter-link-page.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'quotes',
    component: QuotesPageComponent,
  },
  {
    path: 'reservacion',
    component: ReservationPageComponent
  },
  {
    path: 'shortterlink',
    component: ShortterLinkPageComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes), LayoutModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
