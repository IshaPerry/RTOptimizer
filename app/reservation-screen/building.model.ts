import { Reservation } from "./reservation-model";

export class Building {
    public floorImages: string[];
    public floorReservations: Reservation[][];

    // the question marks mean the parameter isn't required
    constructor(image: string[], floors: Reservation[][]) {
        this.floorImages = image;
        this.floorReservations = floors;
    }
}