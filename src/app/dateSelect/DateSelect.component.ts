import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-date-select',
  templateUrl: './DateSelect.component.html',
})
export class DateSelectComponent implements OnInit, OnDestroy {
  selectedDateTime = '';
  parsedSelectedDateTime = '';
  currentDateTime = '';
  differenceDateTime = '';
  private intervalId: any;

  ngOnInit() {
    this.setCurrentDateTime();
    this.selectedDateTime = new Date().toISOString().substring(0, 16); // Initialize with current date and time
    this.parsedSelectedDateTime = this.selectedDateTime.replace('T', ' '); // Replace generic time format marker with space
    this.intervalId = setInterval(() => {
      this.setCurrentDateTime();
      this.updateDifferenceDateTime(); // Update countdown every second
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId); // Clear the interval to prevent memory leaks
  }

  setCurrentDateTime() {
    const now = new Date(); // Get the current date and time
    this.currentDateTime = now.toLocaleString(); // Format it for display
  }

  updateDifferenceDateTime() {
    const selectedTime = new Date(this.selectedDateTime).getTime(); // Convert selected date to milliseconds
    this.parsedSelectedDateTime = this.selectedDateTime.replace('T', ' '); // Replace generic time format marker with space
    const currentTime = new Date().getTime(); // Get current time in milliseconds
    const difference = selectedTime - currentTime;

    // Only calculate if the selected time is in the future
    if (difference > 0) {
      const seconds = Math.floor((difference / 1000) % 60);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));

      this.differenceDateTime = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
      this.differenceDateTime = 'Time has passed';
    }
  }
}
