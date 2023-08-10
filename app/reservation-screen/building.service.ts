import { Injectable } from '@angular/core';

import { Building } from './building.model';
import { Reservation } from './reservation-model';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {
  constructor() { }

  // creation of the first building
  building1FloorImages = ['../assets/img/floor-layouts/floor-1-layout.jpg',
                          '../assets/img/floor-layouts/floor-2-layout.jpg',
                          '../assets/img/floor-layouts/floor-3-layout.jpg',
                          '../assets/img/2.jpg', '5', '6', '7', '8'];
  
  building1ReservationListFloor2: Reservation[] = [
    new Reservation('c1', 'cubicle', 'reserved', 'Jim Halpert', 2),
    new Reservation('c2', 'cubicle', 'reserved', 'Eric Lim', 2),
    new Reservation('c3', 'cubicle', 'reserved', 'Dwight Schrute', 2),
    new Reservation('c4', 'cubicle', 'reserved', 'David Gordon', 2),
    new Reservation('c5', 'cubicle', 'reserved', 'David Morgan', 2),
    new Reservation('c6', 'cubicle', 'reserved', 'Pranav Setlur', 2),
    new Reservation('c7', 'cubicle', 'open', '', 2),
    new Reservation('c8', 'cubicle', 'open', '', 2),
    new Reservation('c9', 'cubicle', 'open', '', 2),
    new Reservation('c10', 'cubicle', 'open', '', 2),
    new Reservation('so1', 'small office', 'reserved', '', 2),
    new Reservation('so2', 'small office', 'open', '', 2),
    new Reservation('so3', 'small office', 'open', '', 2),
    new Reservation('so4', 'small office', 'open', '', 2),
    new Reservation('so5', 'small office', 'open', '', 2),
    new Reservation('so6', 'small office', 'open', '', 2),
    new Reservation('cr1', 'conference room', 'open', '', 2),
    new Reservation('cr2', 'conference room', 'open', '', 2)
  ];

  building1ReservationListFloor4: Reservation[] = [
    new Reservation('c1', 'cubicle', 'reserved', '', 4),
    new Reservation('c2', 'cubicle', 'reserved', '', 4),
    new Reservation('c3', 'cubicle', 'reserved', '', 4),
    new Reservation('c4', 'cubicle', 'reserved', '', 4),
    new Reservation('c5', 'cubicle', 'reserved', '', 4),
    new Reservation('c6', 'cubicle', 'reserved', '', 4),
    new Reservation('c7', 'cubicle', 'open', '', 4),
    new Reservation('c8', 'cubicle', 'open', '', 4),
    new Reservation('c9', 'cubicle', 'open', '', 4),
    new Reservation('c10', 'cubicle', 'open', '', 4),
    new Reservation('so1', 'small office', 'reserved', '', 4),
    new Reservation('so2', 'small office', 'open', '', 4),
    new Reservation('so3', 'small office', 'open', '', 4),
    new Reservation('so4', 'small office', 'open', '', 4),
    new Reservation('so5', 'small office', 'open', '', 4),
    new Reservation('so6', 'small office', 'open', '', 4),
    new Reservation('cr1', 'conference room', 'open', '', 4),
    new Reservation('cr2', 'conference room', 'open', '', 4)
  ];

  building1ReservationFloors: Reservation[][] = [
    [],
    this.building1ReservationListFloor2,
    this.building1ReservationListFloor2,
    this.building1ReservationListFloor4,
    [],
    [],
    [],
    []
  ];

  building1 = new Building(this.building1FloorImages, this.building1ReservationFloors);

  buildings: Building[] = [
    this.building1
  ];
}
