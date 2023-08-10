import { Component, OnInit } from '@angular/core';

import { Reservation } from '../reservation-model';
import { ReservationService } from '../reservation.service';
import { UserProfileService } from '../../user-profile-screen/user-profile.service';
import { Profile } from '../../user-profile-screen/profile.model';

@Component({
  selector: 'app-user-reservation-list',
  templateUrl: './user-reservation-list.component.html',
  styleUrls: ['./user-reservation-list.component.css']
})
export class UserReservationListComponent implements OnInit {
  reservations: Reservation[];

  constructor(private reservationService: ReservationService, private userProfileService: UserProfileService) { }

  ngOnInit(): void {
    this.reservations = this.userProfileService.getProfile().reservations;
    this.userProfileService.profileUpdated.subscribe(
      (profile: Profile) => {
        this.reservations = profile.reservations;
      }
    );
  }

  onCancelReservation(reservation: Reservation) {
    this.reservationService.cancelReservation(reservation);
    this.userProfileService.updateUserReservations();
  } 
}
