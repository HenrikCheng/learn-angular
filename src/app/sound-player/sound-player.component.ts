import { Component } from '@angular/core';

@Component({
  selector: 'app-sound-player',
  templateUrl: './sound-player.component.html',
})
export class SoundPlayerComponent {
  isPlaying = false;

  togglePlay() {
    this.isPlaying = !this.isPlaying;
  }
}
