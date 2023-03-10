import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortterLinkPageComponent } from './pages/shortter-link-page/shortter-link-page.component';
import { FormShortterLinkComponent } from './components/form-shortter-link/form-shortter-link.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';



@NgModule({
  declarations: [
    ShortterLinkPageComponent,
    FormShortterLinkComponent
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
  ]
})
export class ShortterLinkModule { }
