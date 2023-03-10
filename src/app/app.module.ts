import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';


import { registerLocaleData } from '@angular/common';
import localeEsMx from '@angular/common/locales/es-MX';
import * as moment from 'moment';
import { BreakingBadModule } from './breaking-bad/breaking-bad.module';
import { ShortterLinkModule } from './shortter-link/shortter-link.module';
import { WelcomeComponent } from './welcome/welcome.component';

registerLocaleData(localeEsMx, 'es-mx');

@NgModule({
  declarations: [AppComponent, WelcomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatDialogModule,
    MatIconModule,
    SweetAlert2Module.forRoot(),

    LayoutModule,
    BreakingBadModule,
    ShortterLinkModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-mx' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {

  constructor() {
    moment.locale('es-mx');
  }

}
