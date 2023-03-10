import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Reservation } from '../../interfaces/Reservation.interface';

@Component({
  selector: 'app-reservation-modal-on-created',
  templateUrl: './reservation-modal-on-created.component.html',
  styleUrls: ['./reservation-modal-on-created.component.css']
})
export class ReservationModalOnCreatedComponent {

  constructor(
    public dialogRef: MatDialogRef<ReservationModalOnCreatedComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Reservation
  ) {}

  closeModal(sucess: boolean = false) {
    this.dialogRef.close(sucess);
  }


}
