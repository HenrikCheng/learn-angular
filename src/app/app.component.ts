import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'Event title';
  selectedTitle: string | null = null;
  elementWidth: number | null = null;
  windowWidth: number | null = null;

  textSizes = [
    'text-xs',
    'text-sm',
    'text-base',
    'text-lg',
    'text-xl',
    'text-2xl',
    'text-3xl',
    'text-4xl',
    'text-5xl',
    'text-6xl',
    'text-7xl',
    'text-8xl',
    'text-9xl',
  ] as const;

  textSize: (typeof this.textSizes)[number] = this.textSizes[12];

  @ViewChild('eventTitle', { static: false }) eventTitle!: ElementRef;

  ngAfterViewInit() {
    this.adjustTextSize();
  }

  onTitleSelected(title: string) {
    this.selectedTitle = title;
    this.adjustTextSize();
  }

  adjustTextSize() {
    this.updateWidths();
    if (this.isElementWiderThanWindow()) {
      this.decreaseTextSize();
    } else if (this.isWindowSignificantlyWider()) {
      this.increaseTextSize();
    }
  }

  updateWidths() {
    this.elementWidth =
      this.eventTitle.nativeElement.getBoundingClientRect().width;
    this.windowWidth = window.innerWidth;
    console.log(
      'Element width:',
      this.elementWidth,
      'Window width:',
      this.windowWidth
    );
  }

  isElementWiderThanWindow(): boolean {
    return (
      this.elementWidth !== null &&
      this.windowWidth !== null &&
      this.windowWidth < this.elementWidth
    );
  }

  isWindowSignificantlyWider(): boolean {
    return (
      this.elementWidth !== null &&
      this.windowWidth !== null &&
      this.windowWidth - this.elementWidth >= 70
    );
  }

  decreaseTextSize() {
    const currentIndex = this.textSizes.indexOf(this.textSize);
    if (currentIndex > 0) {
      this.textSize = this.textSizes[currentIndex - 1];
      console.log('Decreased text size to:', this.textSize);
    }
  }

  increaseTextSize() {
    const currentIndex = this.textSizes.indexOf(this.textSize);
    if (currentIndex < this.textSizes.length - 1) {
      this.textSize = this.textSizes[currentIndex + 1];
      console.log('Increased text size to:', this.textSize);
    }
  }
}
