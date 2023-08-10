import { EventEmitter, Injectable } from '@angular/core';

import { Reservation } from './reservation-model';
import { Profile } from '../user-profile-screen/profile.model';
import { ToastrService } from 'ngx-toastr';
import { BuildingService } from './building.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  constructor(private buildingService: BuildingService, private notificationService: ToastrService) {}

  reservationsUpdate = new EventEmitter<Reservation[]>();
  // changed to public to make methods easier
  public reservations: Reservation[] = this.buildingService.building1.floorReservations[1];

  building: Reservation[][] = [
    [],
    this.reservations,
    []
  ]

  buildings: Reservation[][][];

  // This only creates a shallow copy, so reservations could potentially be changed outside of this class
  getReservations() {
    return this.reservations;
  }

  makeReservation(reservation: Reservation, profile: Profile) {
    if (!this.canReserve(reservation, profile)) {
      return false;
    }
    // changes status to reserved
    let tag: string = reservation.tag;
    for (let i = 0; i < this.reservations.length; i++) {
      if (this.reservations[i].tag === tag) {
        this.reservations[i].name = profile.name;
        this.reservations[i].status = 'reserved';
        this.reservationsUpdate.emit(this.reservations);
        continue;
      }
    }
    this.showNotification('top','center', 'success', 'Reservation was successfully created');
    return true;
  }
  
  canReserve(reservation: Reservation, profile: Profile) {
    let reservations: Reservation[] = profile.reservations;
    for (let i = 0; i < reservations.length; i++) {
      // ensures no duplicate reservations
      if (reservations[i].tag === reservation.tag) {
        this.showNotification('top', 'center', 'fail', 'You\'ve already reserved this workspace');
        return false;
      }
      // ensures only one individual workspace is reserved
      if ((reservation.type === 'cubicle') && (reservations[i].type === 'cubicle')) {
        this.showNotification('top', 'center', 'fail', 'You can\'t reserve more than one individual workspace');
        return false;
      }
    }
    // ensures reserved rooms can't be reserved again
    if (reservation.status === 'reserved') {
      this.showNotification('top', 'center', 'fail', 'This workspace has already been reserved');
      return false;
    }
    return true;
  }

  cancelReservation(reservation: Reservation) {
    let tag: string = reservation.tag;
    for (let i = 0; i < this.reservations.length; i++) {
      if (this.reservations[i].tag === tag) {
        this.reservations[i].name = '';
        this.reservations[i].status = 'open';
        this.reservationsUpdate.emit(this.reservations);
        return;
      }
    }
  }

  showNotification(from: string, align: string, alertType: string, alertMessage: string){
    if (alertType === 'success') {
      this.notificationService.success(`<span class="now-ui-icons ui-1_bell-53"></span>${alertMessage}`, '', {
        timeOut: 6000,
        closeButton: true,
        enableHtml: true,
        toastClass: "alert alert-success alert-with-icon",
        positionClass: 'toast-' + from + '-' +  align
      });
    }

    if (alertType === 'fail') {
      this.notificationService.success(`<span class="now-ui-icons ui-1_bell-53"></span>${alertMessage}`, '', {
        timeOut: 6000,
        closeButton: true,
        enableHtml: true,
        toastClass: "alert alert-danger alert-with-icon",
        positionClass: 'toast-' + from + '-' +  align
      });
    }
  }
}
