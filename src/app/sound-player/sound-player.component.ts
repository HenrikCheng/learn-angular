import { Component } from '@angular/core';

@Component({
  selector: 'app-sound-player',
  templateUrl: './sound-player.component.html',
})
export class SoundPlayerComponent {
  isPlaying = false;
  audio: HTMLAudioElement;

  constructor() {
    this.audio = new Audio('assets/womb-sound.mp4'); // Replace with your local file path
    this.audio.loop = true; // Enable looping
  }

  togglePlay() {
    this.isPlaying = !this.isPlaying;

    if (this.isPlaying) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }
}
