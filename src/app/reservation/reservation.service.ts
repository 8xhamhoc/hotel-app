import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiUrl = 'http://localhost:3001'; // Example API endpoint

  private reservations: Reservation[] = [];

  // constructor() {
  //   let data = localStorage.getItem('reservations');
  //   this.reservations = data ? JSON.parse(data) : [];
  // }

  constructor(private http: HttpClient) {
  }

  // CRUD operations
  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiUrl + '/reservations');
  }

  getReservation(id: string): Observable<Reservation> {
    return this.http.get<Reservation>(this.apiUrl + '/reservations/' + id);
  }

  addReservation(reservation: Reservation): Observable<void> {
    // reservation.id = Math.random().toString(36).substr(2, 9); // Simple ID generation
    // this.reservations.push(reservation);
    // localStorage.setItem('reservations', JSON.stringify(this.reservations));
    return this.http.post<void>(this.apiUrl + '/reservations', reservation);
  }

  deleteReservation(id: string): Observable<void> {
    // let index = this.reservations.findIndex(res => res.id === id);
    // if (index !== -1) {
    //   this.reservations.splice(index, 1);
    //   // localStorage.setItem('reservations', JSON.stringify(this.reservations));
    // }

    return this.http.delete<void>(this.apiUrl + '/reservations/' + id);
  }

  updateReservation(id: string, updatedReservation: Reservation): Observable<void> {
    // let index = this.reservations.findIndex(res => res.id === id);
    // if (index !== -1) {
    //   this.reservations[index] = updatedReservation;
    //   // localStorage.setItem('reservations', JSON.stringify(this.reservations));
    // }
    return this.http.put<void>(this.apiUrl + '/reservations/' + id, updatedReservation);
  }
}