import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
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
    '/assets/home/carosello/foto1.jpg',
    '/assets/home/carosello/foto2.jpg',
    '/assets/home/carosello/foto3.jpg',
    '/assets/home/carosello/foto4.jpg',
    '/assets/home/carosello/foto5.jpg',
    '/assets/home/carosello/foto6.jpg',
    '/assets/home/carosello/foto7.jpg',
    '/assets/home/carosello/foto8.jpg'
  ];

  //test

  constructor(private cdRef: ChangeDetectorRef) {}

  @ViewChild('carouselTrack', { static: false }) carouselTrack!: ElementRef;

  currentIndex = 0;
  isTransitioning = false;

  get displayImages() {
    const totalImages = this.images.length;

    // Calcola gli indici per le 3 immagini da mostrare
    const prevIndex = (this.currentIndex - 1 + totalImages) % totalImages;
    const currentImageIndex = this.currentIndex;
    const nextIndex = (this.currentIndex + 1) % totalImages;

    return [
      this.images[prevIndex],    // Immagine sinistra
      this.images[currentImageIndex], // Immagine centrale
      this.images[nextIndex]     // Immagine destra
    ];
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  onTransitionEnd() {
    this.isTransitioning = false;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}
