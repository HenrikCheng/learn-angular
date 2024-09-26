import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'date-select',
  templateUrl: './DateSelect.component.html',
})
export class DateSelect implements OnInit, OnDestroy {
  @Input() message: string = ''; // Input message from parent component

  selectedDateTime: string = ''; // Stores the selected date and time
  currentDateTime: string = ''; // Stores the current date and time
  differenceDateTime: string = ''; // Stores the countdown date and time
  private intervalId: any; // Holds the interval ID for updating time

  ngOnInit() {
    this.setCurrentDateTime(); // Set the current date and time
    this.selectedDateTime = new Date().toISOString().substring(0, 16); // Initialize with current date and time
    this.intervalId = setInterval(() => this.setCurrentDateTime(), 1000); // Update current time every second
  }

  ngOnDestroy() {
    clearInterval(this.intervalId); // Clear the interval to prevent memory leaks
  }

  setCurrentDateTime() {
    const now = new Date(); // Get the current date and time
    this.currentDateTime = now.toLocaleString(); // Format it for display
  }
}
