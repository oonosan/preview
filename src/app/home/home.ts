import { ViewportScroller } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private scroller = inject(ViewportScroller);

  scrollToSection(id: string) {
    this.scroller.scrollToAnchor(id);
  }
}
