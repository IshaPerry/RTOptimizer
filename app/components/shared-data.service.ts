import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private status: string;

  constructor() { }

  setStatus(value: string) {
    this.status = value;
  }

  getStatus(): string {
    return this.status;
  }
}
