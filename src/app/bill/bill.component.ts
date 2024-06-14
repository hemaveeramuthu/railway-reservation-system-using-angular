import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../shared/booking.service';
import { BillService } from '../shared/bill.service';
import { googlePayConfig } from '../google-pay-config';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent {
  bookings: any[] = [];
  totalAmount: number = 0;
  paymentRequest = googlePayConfig;

  constructor(
    private bookingService: BookingService, 
    private billService: BillService, 
    private router: Router
  ) {
    this.bookings = this.bookingService.bookings;
    this.calculateTotalAmount();
  }

  calculateTotalAmount() {
    this.totalAmount = this.bookings.reduce((acc, booking) => {
      return acc + this.getSeatTypeAmount(booking.seatType);
    }, 0);
  }

  getSeatTypeAmount(seatType: string): number {
    switch (seatType) {
      case 'First Class':
        return 1500;
      case 'AC Chair Class (CC)':
        return 1000;
      case 'Sleeper Class (SL)':
        return 800;
      case 'Second Class (2S)':
        return 500;
      case 'Unreserved/General Class':
        return 200;
      default:
        return 0;
    }
  }

  onSaveBill() {
    const bill = {
      name: 'Total Bill',
      amount: this.totalAmount
    };

    this.billService.addBill(bill).subscribe(
      response => {
        console.log('Bill added:', response);
        alert('Bill saved successfully!');
      },
      error => {
        console.error('Error adding bill:', error);
        alert('Failed to save the bill.');
      }
    );
  }

  onLoadPaymentData(event: Event) {
    const paymentData = (event as CustomEvent).detail;
    console.log('Payment Data Loaded', paymentData);
    // Handle the payment response here
    // You can send paymentData to your backend for further processing
  }

  onBack() {
    this.router.navigate(['/add']);
  }
}
