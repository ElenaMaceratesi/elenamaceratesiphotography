import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryPhoto } from '../../helper/gallery/gallery-servizi.service';

@Component({
  selector: 'app-lightbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lightbox.component.html',
  styleUrl: './lightbox.component.scss'
})
export class LightboxComponent implements OnInit, OnDestroy {
  @Input() photos: GalleryPhoto[] = [];
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();
  
  currentIndex: number = 0;
  currentPhoto: GalleryPhoto = { src: '', alt: '' };
  
  private touchStartX: number = 0;
  private touchEndX: number = 0;
  private readonly SWIPE_THRESHOLD = 50; // pixels

  ngOnInit() {
    if (this.photos.length > 0) {
      this.currentPhoto = this.photos[0];
    }
  }

  ngOnDestroy() {
    // Clean up keyboard listeners when component is destroyed
  }

  ngOnChanges() {
    if (this.isOpen && this.photos.length > 0) {
      this.currentPhoto = this.photos[this.currentIndex];
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (!this.isOpen) return;
    
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.nextPhoto();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.previousPhoto();
    } else if (event.key === 'Escape') {
      event.preventDefault();
      this.closeLightbox();
    }
  }

  openPhoto(index: number) {
    if (index >= 0 && index < this.photos.length) {
      this.currentIndex = index;
      this.currentPhoto = this.photos[index];
      this.isOpen = true;
    }
  }

  closeLightbox() {
    this.isOpen = false;
    this.close.emit();
  }

  nextPhoto() {
    if (this.currentIndex < this.photos.length - 1) {
      this.currentIndex++;
      this.currentPhoto = this.photos[this.currentIndex];
    }
  }

  previousPhoto() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.currentPhoto = this.photos[this.currentIndex];
    }
  }

  // Touch events for swipe
  onTouchStart(event: TouchEvent) {
    if (event.touches.length > 0) {
      this.touchStartX = event.touches[0].clientX;
    }
  }

  onTouchEnd(event: TouchEvent) {
    if (event.changedTouches.length > 0) {
      this.touchEndX = event.changedTouches[0].clientX;
      this.handleSwipe();
    }
  }

  private handleSwipe() {
    const difference = this.touchStartX - this.touchEndX;

    // Swipe left (negative difference) - go to next photo
    if (difference > this.SWIPE_THRESHOLD) {
      this.nextPhoto();
    }
    // Swipe right (positive difference) - go to previous photo
    else if (difference < -this.SWIPE_THRESHOLD) {
      this.previousPhoto();
    }
  }
}
