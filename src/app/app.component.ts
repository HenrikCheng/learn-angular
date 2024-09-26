import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Hello from Parent Component';
  message = 'This is a message passed from the AppComponent to the DateSelect';
}
