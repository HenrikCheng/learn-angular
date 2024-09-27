import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Event title';
  selectedTitle: string | null = null; // To store the selected title

  onTitleSelected(title: string) {
    this.selectedTitle = title; // Store the received title
    console.log('Received title:', this.selectedTitle); // For debugging
  }
}
