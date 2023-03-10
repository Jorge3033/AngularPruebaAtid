import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CountryService } from '../../services/country/country.service';
import { Country } from '../../interfaces/CountryData.interface';
import { Reservation } from '../../interfaces/Reservation.interface';

@Component({
  selector: 'app-form-reservation',
  templateUrl: './form-reservation.component.html',
  styleUrls: ['./form-reservation.component.css'],
})
export class FormReservationComponent implements OnInit {
  @Input() countries: Country[] = [];

  @Output() onCreated = new EventEmitter<Reservation>();

  date: FormControl = new FormControl<Date| null>(null, [
    Validators.required,
  ]);

  name: FormControl = new FormControl<string>('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(20),
  ]);

  email: FormControl = new FormControl<string>('', [
    Validators.required,
    Validators.email,
    Validators.pattern(/^[a-z0-9._%+-]+@(hotmail|gmail)\.com$/),
  ]);

  country = new FormControl<string>('', [Validators.required]);

  form = new FormGroup({
    date: this.date,
    name: this.name,
    email: this.email,
    country: this.country,
  });

  constructor(private countriService: CountryService) {}

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.countriService.getCountries().subscribe((response) => {
      for (const countryCode in response.data) {
        const country = response.data[countryCode];
        this.countries.push(country);
      }
    },
    (error) => {
      this.countries = [
        {
          country: 'Colombia',
          region: 'CO',
        }
      ];
      console.log(error);
    }

    );
  }

  onSubmit() {

    if ( this.isInvalidDate(this.form.value.date) ) {
      this.form.controls.date.setErrors({ invalidDate: true });
      return;
    }
    

    
    if (!this.form.valid) {
      return;
    }

    const reservation: Reservation = {
      date: this.form.value.date,
      name: this.form.value.name,
      email: this.form.value.email,
      country: this.form.value.country || '',
    };
    

    this.onCreated.emit(reservation);

  }

  isInvalidDate(dateToValid: any): boolean {
    const date  = new Date(dateToValid);
    const currentDay = new Date();

    // Calcular la fecha máxima (un día después de la fecha actual)
    const maxDate = new Date(currentDay);
    maxDate.setDate(maxDate.getDate() + 1);

    // Calcular la fecha mínima (11 meses atrás)
    const minDate = new Date(currentDay);
    minDate.setMonth(minDate.getMonth() - 11);

    // Validar que la fecha esté entre la fecha mínima y la fecha máxima
    return date < minDate || date > maxDate
  }

}
