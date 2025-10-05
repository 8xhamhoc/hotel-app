import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation[] = [];

  constructor() {
    let data = localStorage.getItem('reservations');
    this.reservations = data ? JSON.parse(data) : [];
  }

  // CRUD operations
  getReservations(): Reservation[] {
    return this.reservations;
  }

  getReservation(id: string): Reservation | undefined {
    return this.reservations.find(res => res.id === id);
  }

  addReservation(reservation: Reservation): void {
    reservation.id = Math.random().toString(36).substr(2, 9); // Simple ID generation
    this.reservations.push(reservation);
    console.log('Added reservation with id:', reservation.id);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  deleteReservation(id: string): void {
    let index = this.reservations.findIndex(res => res.id === id);
    if (index !== -1) {
      this.reservations.splice(index, 1);
      localStorage.setItem('reservations', JSON.stringify(this.reservations));
    }
  }

  updateReservation(id: string, updatedReservation: Reservation): void {
    console.log('Update reservation called with id:', id, 'and data:', updatedReservation.id);
    let index = this.reservations.findIndex(res => res.id === id);
    if (index !== -1) {
      console.log('Updating reservation with id:', id);
      this.reservations[index] = updatedReservation;
      localStorage.setItem('reservations', JSON.stringify(this.reservations));
    }
  }
}