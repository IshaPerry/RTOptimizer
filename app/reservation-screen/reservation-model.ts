export class Reservation {
    public tag: string;
    public type: string;
    public status: string;
    public name: string;
    public floor: number;

    // the question marks mean the parameter isn't required
    constructor(tag: string, type: string, status: string, name: string, floor: number) {
        this.tag = tag;
        this.type = type;
        this.status = status;
        this.name = name;
        this.floor = floor;
    }
}