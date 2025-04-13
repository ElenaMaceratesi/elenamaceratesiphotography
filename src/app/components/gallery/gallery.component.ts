import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  images = [
    '/assets/gallery3.jpg',
    '/assets/gallery1.jpg',
    '/assets/gallery2.jpg',
    '/assets/gallery3.jpg',
  ];

  currentIndex = 0;
  startX = 0;
  endX = 0;

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  getTransform(): string {
  return `translateX(-${this.currentIndex * 85}%)`;
}

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.startX = event.touches[0].clientX;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    this.endX = event.changedTouches[0].clientX;
    const deltaX = this.endX - this.startX;

    if (deltaX > 50) this.prev();
    else if (deltaX < -50) this.next();
  }
}