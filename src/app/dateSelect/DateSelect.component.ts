import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date-select',
  templateUrl: './DateSelect.component.html',
})
export class DateSelect {
  @Input() message: string = ''; // Like props in React

  // This acts like the useState hook, storing the selected date
  selectedDate: string = '';
}
