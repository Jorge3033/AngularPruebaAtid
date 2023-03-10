import { Component } from '@angular/core';
import { Reservation } from '../../interfaces/Reservation.interface';
import { ReservationModalOnCreatedComponent } from '../../components/reservation-modal-on-created/reservation-modal-on-created.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.css']
})
export class ReservationPageComponent {

  constructor( public dialog: MatDialog) { }

  onCreated(reservation: Reservation) {
    this.openDialogShowAnJob(reservation);
  }


  openDialogShowAnJob(job: Reservation) {
    
    const dialogRef = this.dialog.open(ReservationModalOnCreatedComponent, {
      data: job,
      width: '600px',
      height: 'auto',
      maxHeight: '90vh',
      position: { top: '4rem' },
    });

    dialogRef.afterClosed().subscribe((res: boolean) => {
      if (res) {
        console.log('closed');
      }
    });
  }

}
