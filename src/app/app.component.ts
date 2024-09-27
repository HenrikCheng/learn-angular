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

  @ViewChild('eventTitle', { static: false }) eventTitle!: ElementRef;

  getWidth() {
    this.width = this.eventTitle.nativeElement.getBoundingClientRect().width;
    this.windowWidth = window.innerWidth;
    console.log('Width of h1 element:', this.width);
    console.log('Width window:', window.innerWidth);
  }

  ngAfterViewInit() {
    this.getWidth();
  }

  onTitleSelected(title: string) {
    this.selectedTitle = title;
    this.getWidth();
  }
}
