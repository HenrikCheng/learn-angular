import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sound-player',
  templateUrl: './sound-player.component.html',
})
export class SoundPlayerComponent {
  isPlaying = false;

  @ViewChild('audioPlayer') audioPlayer?: ElementRef<HTMLAudioElement>;
}
