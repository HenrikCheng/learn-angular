import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-date-select',
  templateUrl: './DateSelect.component.html',
})
export class DateSelectComponent implements OnInit, OnDestroy {
  @Input() message = ''; // Input message from parent component

  selectedDateTime = ''; // Stores the selected date and time
  currentDateTime = ''; // Stores the current date and time
  differenceDateTime = ''; // Stores the countdown time
  private intervalId: any; // Holds the interval ID for updating time

  ngOnInit() {
    this.setCurrentDateTime(); // Set the current date and time
    this.selectedDateTime = new Date().toISOString().substring(0, 16); // Initialize with current date and time
    this.intervalId = setInterval(() => {
      this.setCurrentDateTime();
      this.updateDifferenceDateTime(); // Update countdown every second
    }, 1000); // Update current time every second
  }

  ngOnDestroy() {
    clearInterval(this.intervalId); // Clear the interval to prevent memory leaks
  }

  setCurrentDateTime() {
    const now = new Date(); // Get the current date and time
    this.currentDateTime = now.toLocaleString(); // Format it for display
  }

  updateDifferenceDateTime() {
    // New method added
    const selectedTime = new Date(this.selectedDateTime).getTime(); // Convert selected date to milliseconds
    const currentTime = new Date().getTime(); // Get current time in milliseconds
    const difference = selectedTime - currentTime; // Calculate the difference

    if (difference > 0) {
      // Only calculate if the selected time is in the future
      const seconds = Math.floor((difference / 1000) % 60);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));

      // Format the countdown string
      this.differenceDateTime = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
      this.differenceDateTime = 'Time has passed'; // Message if time has passed
    }
  }
}
