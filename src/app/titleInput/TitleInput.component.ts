import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-title-input',
  templateUrl: './TitleInput.component.html',
})
export class TitleInputComponent {
  @Output() titleSelected = new EventEmitter<string>(); // EventEmitter to pass selected title to parent

  inputTitle(title: string) {
    this.titleSelected.emit(title);
  }
}
