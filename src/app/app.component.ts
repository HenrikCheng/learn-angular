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
    if (this.windowWidth && this.width) {
      const currentIndex = this.textSizesArr.indexOf(this.textSize);

      if (this.windowWidth < this.width) {
        console.log('Window width is less than the element width');
        // Decrement size if current size isn't the smallest
        if (currentIndex > 0) {
          this.textSize = this.textSizesArr[currentIndex - 1];
        }
      } else if (this.windowWidth - this.width >= 70) {
        console.log(
          'Window width is at least 50px larger than the element width'
        );
        // Increment size if current size isn't the largest
        if (currentIndex < this.textSizesArr.length - 1) {
          this.textSize = this.textSizesArr[currentIndex + 1];
        }
      }
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
