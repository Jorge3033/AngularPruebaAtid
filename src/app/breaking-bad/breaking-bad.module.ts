import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormReservationComponent } from './components/form-reservation/form-reservation.component';
import { QuotesPageComponent } from './pages/quotes-page/quotes-page.component';
import { ReservationPageComponent } from './pages/reservation-page/reservation-page.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { SelectCountriesComponent } from './components/select-countries/select-countries.component';
import { CardBreakingBadQuotesComponent } from './components/card-breaking-bad-quotes/card-breaking-bad-quotes.component';
import { MatNativeDateModule } from '@angular/material/core';
import { ReservationModalOnCreatedComponent } from './components/reservation-modal-on-created/reservation-modal-on-created.component';

@NgModule({
  declarations: [
    FormReservationComponent,
    QuotesPageComponent,
    ReservationPageComponent,
    SelectCountriesComponent,
    CardBreakingBadQuotesComponent,
    ReservationModalOnCreatedComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,

    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    TextFieldModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,

    SweetAlert2Module.forRoot(),
  ],
  exports: [
    QuotesPageComponent,
    ReservationPageComponent,
  ]
})
export class BreakingBadModule { }
