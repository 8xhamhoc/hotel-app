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

  getReservation(id: string): Reservation | undefined {
    return this.reservations.find(res => res.id === id);
  }

  addReservation(reservation: Reservation): void {
    reservation.id = Math.random().toString(36).substr(2, 9); // Simple ID generation
    this.reservations.push(reservation);
    // localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  deleteReservation(id: string): void {
    let index = this.reservations.findIndex(res => res.id === id);
    if (index !== -1) {
      this.reservations.splice(index, 1);
      // localStorage.setItem('reservations', JSON.stringify(this.reservations));
    }
  }

  updateReservation(id: string, updatedReservation: Reservation): void {
    let index = this.reservations.findIndex(res => res.id === id);
    if (index !== -1) {
      this.reservations[index] = updatedReservation;
      // localStorage.setItem('reservations', JSON.stringify(this.reservations));
    }
  }
}