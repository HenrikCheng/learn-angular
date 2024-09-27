import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'Event title';
  selectedTitle: string | null = null;
  width: number | null = null;
  windowWidth: number | null = null;
  textSizesArr = [
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
  textSize: (typeof this.textSizesArr)[number] = this.textSizesArr[12];

  @ViewChild('eventTitle', { static: false }) eventTitle!: ElementRef;

  getWidth() {
    this.width = this.eventTitle.nativeElement.getBoundingClientRect().width;
    this.windowWidth = window.innerWidth;
    console.log('Width of h1 element:', this.width);
    console.log('Width window:', window.innerWidth);
    this.compareWidth();
  }

  compareWidth() {
    if (this.windowWidth && this.width && this.windowWidth < this.width) {
      console.log('Window width is less than the element width');
      const currentIndex = this.textSizesArr.indexOf(this.textSize);
      if (currentIndex > 0) {
        this.textSize = this.textSizesArr[currentIndex - 1];
      }
    } else {
      console.log('Window width is greater than or equal to the element width');
      // Check if below size is greater than window, if not, decrement size
    }
  }

  ngAfterViewInit() {
    this.getWidth();
  }

  calculateTextClass() {
    console.log('textSize: ', this.textSize);
  }

  onTitleSelected(title: string) {
    this.selectedTitle = title;
    this.getWidth();
    this.calculateTextClass();
  }
}
