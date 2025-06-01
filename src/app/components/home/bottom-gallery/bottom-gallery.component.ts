import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';

@Component({
  selector: 'app-bottom-gallery',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './bottom-gallery.component.html',
  styleUrl: './bottom-gallery.component.scss'
})
export class BottomGalleryComponent {
  @ViewChild('galleryContainer') galleryContainer!: ElementRef;

  photos = [
    { src: '/assets/home/carosello/elena.jpg', alt: 'Neonato che dorme' },
    { src: '/assets/home/carosello/pancia.jpg', alt: 'Famiglia con neonato' },
    { src: '/assets/home/carosello/gallery4.png', alt: 'Coppia con bambino' },
    { src: '/assets/home/carosello/gallery5.png', alt: 'Bambina sorridente' },
    { src: '/assets/home/carosello/gallery6.png', alt: 'Momento familiare' }
  ];

  activeIndex = 0;
  canScrollLeft = false;
  canScrollRight = true;
  showNavButtons = false;
  showIndicators = false;

  ngOnInit() {
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.updateScrollButtons();
    }, 100);
  }

  private checkScreenSize() {
    const width = window.innerWidth;
    this.showNavButtons = width >= 768 && width < 1024;
    this.showIndicators = width < 768;
  }

  onScroll() {
    this.updateScrollButtons();
    this.updateActiveIndex();
  }

  private updateScrollButtons() {
    if (!this.galleryContainer) return;

    const container = this.galleryContainer.nativeElement;
    this.canScrollLeft = container.scrollLeft > 0;
    this.canScrollRight = container.scrollLeft < (container.scrollWidth - container.clientWidth);
  }

  private updateActiveIndex() {
    if (!this.galleryContainer) return;

    const container = this.galleryContainer.nativeElement;
    const itemWidth = container.querySelector('.photo-item')?.clientWidth || 0;
    const gap = 16; // 1rem gap
    const scrollLeft = container.scrollLeft;

    this.activeIndex = Math.round(scrollLeft / (itemWidth + gap));
  }

  scrollLeft() {
    if (!this.galleryContainer) return;

    const container = this.galleryContainer.nativeElement;
    const itemWidth = container.querySelector('.photo-item')?.clientWidth || 0;
    const gap = 16;

    container.scrollBy({
      left: -(itemWidth + gap),
      behavior: 'smooth'
    });
  }

  scrollRight() {
    if (!this.galleryContainer) return;

    const container = this.galleryContainer.nativeElement;
    const itemWidth = container.querySelector('.photo-item')?.clientWidth || 0;
    const gap = 16;

    container.scrollBy({
      left: itemWidth + gap,
      behavior: 'smooth'
    });
  }

  scrollToIndex(index: number) {
    if (!this.galleryContainer) return;

    const container = this.galleryContainer.nativeElement;
    const itemWidth = container.querySelector('.photo-item')?.clientWidth || 0;
    const gap = 16;

    container.scrollTo({
      left: index * (itemWidth + gap),
      behavior: 'smooth'
    });
  }

  onImageLoad() {
    // Aggiorna i pulsanti quando le immagini sono caricate
    setTimeout(() => this.updateScrollButtons(), 100);
  }
}
