import { EventEmitter, Injectable } from "@angular/core";

import { Profile } from "./profile.model";
import { Reservation } from "../reservation-screen/reservation-model";
import { ReservationService } from "../reservation-screen/reservation.service";

// This service will house the instance of profile used throughout the app
@Injectable({providedIn:'root'})
export class UserProfileService {
    constructor(private reservationService: ReservationService) {}

    initialAdminStatus: boolean = false;
    adminStatus = false;
    loginStatus = false;
    
    adminStatusUpdate = new EventEmitter<boolean>();
    loginUpdate = new EventEmitter<boolean>();
    profileUpdated = new EventEmitter<Profile>();
    reservationList: Reservation[] = this.reservationService.getReservations();

    // changed to public to make methods easier
    public userProfile: Profile = new Profile('Jim', 'Halpert', 'JHalpert1', 'Scranton Paper Sales', null);

    // All the company's profiles. This should probably be refactored into its own service and made private
    teamTDP: Profile[] = [
        this.userProfile,
        new Profile('Eric', 'Lim', 'ChatTDP6', 'Software Engineer', this.reservationList[1]),
        new Profile('Dwight', 'Schrute', 'ChatTDP2', 'Software Engineer', this.reservationList[2]),
        new Profile('David', 'Gordon', 'ChatTDP3', 'Software Engineer', this.reservationList[3]),
        new Profile('David', 'Morgan', 'ChatTDP4', 'Project Manager', this.reservationList[4]),
        new Profile('Pranav', 'Setlur', 'ChatTDP5', 'Data Scientist', this.reservationList[5]),
    ]

    teams: Profile[][] = [
        this.teamTDP
    ]

    setProfile(firstName: string, lastName: string, username: string, role: string) {
        this.userProfile.firstName = firstName;
        this.userProfile.lastName = lastName;
        this.userProfile.username = "JHalpert1";
        this.userProfile.role = role;
        this.profileUpdated.emit(this.userProfile);
    }

    // updates user reservations based on global reservations
    updateUserReservations() {
        this.userProfile.reservations = [];
        for (let i = 0; i < this.reservationList.length; i++) {
            if (this.reservationList[i].name === this.userProfile.name) {
                this.userProfile.reservations.push(this.reservationList[i]);
            }
        }
        this.profileUpdated.emit(this.userProfile);
    }

    getProfile() {
        // return new Profile(this.userProfile);
        return this.userProfile;
    }

    isLoggedIn() {
        this.loginStatus = true;
        this.loginUpdate.emit(true);
    }

    changeAdminStatus(status: string) {
        if (status.match('admin')) {
            this.adminStatus = true;
        } else {
            this.adminStatus = false;
        }
        this.adminStatusUpdate.emit(this.adminStatus);
        console.log(this.adminStatus);
    }
}