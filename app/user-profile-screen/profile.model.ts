import { Reservation } from "../reservation-screen/reservation-model";

export class Profile {
    public name: string;
    public firstName: string;
    public lastName: string;
    public username: string;
    public role: string;
    public reservations: Reservation[] = [];

    // the question marks mean the parameter isn't required
    constructor(profile: Profile);
    constructor(firstName: string, lastName: string, username: string, role: string, reservation: Reservation);
    constructor(firstNameOrProfile: string | Profile, lastName?: string, username?: string, role?: string, reservation?: Reservation) {
        if (typeof firstNameOrProfile === 'object') {
            this.firstName = firstNameOrProfile.firstName;
            this.lastName = firstNameOrProfile.lastName;
            this.username = firstNameOrProfile.username;
            this.role = firstNameOrProfile.role;
            this.reservations = firstNameOrProfile.reservations;
            this.name = firstNameOrProfile.firstName + ' ' + lastName;
        } else {
            this.firstName = firstNameOrProfile || '';
            this.lastName = lastName || '';
            this.username = username || '';
            this.role = role || '';
            if (reservation !== null) {
                this.reservations.push(reservation);
            }
            this.name = firstNameOrProfile + ' ' + lastName;
        }
        // debug logs
        // console.log(this.firstName);
        // console.log(this.lastName);
        // console.log(this.reservations);
        // console.log(this.role);
        // console.log(this.name);
    }
}