import { Injectable } from '@angular/core';
import { Reservation} from "../models/reservation";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = "http://localhost:3000"
  private reservations: Reservation[] = []

  constructor(private http: HttpClient) {
  }

  // CRUD (create, read, update, delete)

  // Get (READ) ALL reservations:
  getReservations(): Observable<Reservation[]> {
    console.log
    return this.http.get<Reservation[]>(this.apiUrl + "/reservations");
  }

  // Get (read) Reservation by ID (undefined in Case there is no value)
  getReservation(id: string):  Observable<Reservation> {
    return this.http.get<Reservation>(this.apiUrl + "/reservation/"+id);
  }

  // CREATE
  addReservation(reservation: Reservation) : Observable<void> {
    return this.http.post<void>(this.apiUrl + "/reservation", reservation)
  }

  // DELETE (delete by ID)
  deleteReservation(id: string) : Observable<void> {
    return this.http.delete<void>(this.apiUrl + "/reservation/" + id)
  }

  // UPDATE (update by ID)
  updateReservation(id: string,  updatedReservation: Reservation) : Observable<void> {
    return this.http.put<void>(this.apiUrl + "/reservation/" + id, updatedReservation)
   }
  }
