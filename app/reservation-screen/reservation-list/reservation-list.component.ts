import { Component, Input, OnInit } from '@angular/core';

import { ReservationService } from '../reservation.service';
import { Reservation } from '../reservation-model';
import { UserProfileService } from '../../user-profile-screen/user-profile.service';
import { BuildingService } from '../building.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {
  reservations: Reservation[];
  @Input() selectedFloor;
  
  constructor(private reservationService: ReservationService, private userProfileService: UserProfileService,
              private buildingService: BuildingService) { }

  ngOnInit(): void {
    this.reservations = this.reservationService.getReservations();
    this.reservationService.reservationsUpdate.subscribe(
      (updatedReservations: Reservation[]) => {
        this.reservations = updatedReservations;
      }
    );
  }

  onReserveClick(reservationItem: Reservation) {
    if (this.reservationService.makeReservation(reservationItem, this.userProfileService.userProfile)) {
      this.userProfileService.updateUserReservations();
    }
  }
}
