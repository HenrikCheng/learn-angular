// src/app/message/message.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
})
export class MessageComponent {
  @Input() message: string = ''; // Like props in React
}
