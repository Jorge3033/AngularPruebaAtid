import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationModalOnCreatedComponent } from './reservation-modal-on-created.component';

describe('ReservationModalOnCreatedComponent', () => {
  let component: ReservationModalOnCreatedComponent;
  let fixture: ComponentFixture<ReservationModalOnCreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationModalOnCreatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationModalOnCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
