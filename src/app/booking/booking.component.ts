import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../shared/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  fullName: string = '';
  phoneNumber: string = '';
  gender: string = '';
  seatType: string = '';
  age: number = 0;

  constructor(private router: Router, private bookingService: BookingService) {}

  onSubmit() {
    // Form validation logic goes here

    // Create a booking object
    const booking = {
      fullName: this.fullName,
      phoneNumber: this.phoneNumber,
      gender: this.gender,
      seatType: this.seatType,
      age: this.age
    };

    // Add the booking using the service
    this.bookingService.addBooking(booking);

    // Navigate to the add page
    this.router.navigate(['/add']);
  }
}
