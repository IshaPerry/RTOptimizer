import { Component, OnInit } from '@angular/core';

import { Profile } from '../../user-profile-screen/profile.model';
import { UserProfileService } from '../../user-profile-screen/user-profile.service';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-team-tracker',
  templateUrl: './team-tracker.component.html',
  styleUrls: ['./team-tracker.component.css']
})
export class TeamTrackerComponent implements OnInit {

  team: Profile[];

  constructor(private profileService: UserProfileService, private reservationService: ReservationService) { }
  reservationList = this.reservationService.reservations;
  ngOnInit(): void {
    this.team = this.profileService.teamTDP;
  }

}
