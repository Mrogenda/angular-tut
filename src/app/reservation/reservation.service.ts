import { Injectable } from '@angular/core';
import { Reservation} from "../models/reservation";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation[] = []

  constructor() {
    // is loaded BEFORE ngOnInit, what is important
    let savedReservations = localStorage.getItem("reservations");
    this.reservations = savedReservations ? JSON.parse(savedReservations) : [];
  }

  // CRUD (create, read, update, delete)

  // Get (READ) ALL reservations:
  getReservations(): Reservation[] {
    return this.reservations;
  }

  // Get (read) Reservation by ID (undefined in Case there is no value)
  getReservation(id: string): Reservation | undefined {
    return this.reservations.find(res => res.id === id);
  }

  // CREATE
  addReservation(reservation: Reservation) : void {
    reservation.id = Date.now().toString();

    this.reservations.push(reservation)
    localStorage.setItem("reservations", JSON.stringify(this.reservations))
  }

  // DELETE (delete by ID)
  deleteReservation(id: string) : void {
    let index: number = this.reservations.findIndex(res => res.id === id);
    this.reservations.splice(index,  1);
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }

  // UPDATE (update by ID)
  updateReservation(id: string,  updatedReservation: Reservation) : void {
   let index  = this.reservations.findIndex(res => res.id === id);
   this.reservations[index] = updatedReservation;
    localStorage.setItem("reservations", JSON.stringify(this.reservations))
  }
}
