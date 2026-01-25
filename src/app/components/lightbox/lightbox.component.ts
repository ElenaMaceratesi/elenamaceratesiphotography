import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryPhoto } from '../../helper/gallery/gallery-servizi.service';

@Component({
  selector: 'app-lightbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lightbox.component.html',
  styleUrl: './lightbox.component.scss'
})
export class LightboxComponent implements OnInit {
  @Input() photos: GalleryPhoto[] = [];
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();
  
  currentIndex: number = 0;
  currentPhoto: GalleryPhoto = { src: '', alt: '' };

  ngOnInit() {
    if (this.photos.length > 0) {
      this.currentPhoto = this.photos[0];
    }
  }

  ngOnChanges() {
    if (this.isOpen && this.photos.length > 0) {
      this.currentPhoto = this.photos[this.currentIndex];
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
}
