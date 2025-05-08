import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements AfterViewInit{
  images = [
    '/assets/elena.jpg',
    '/assets/gallery4.png',
    '/assets/gallery5.png',
    '/assets/gallery6.png',
  ];

  constructor(private cdRef: ChangeDetectorRef) {}

  // Creiamo l'array esteso per il loop infinito: [ultima, ...immagini, prima]
  displayImages: string[] = [];
  // Impostiamo currentIndex a 1 in modo che la prima immagine reale sia al centro
  currentIndex: number = 1;

  // Definiamo il gap in pixel usato nei CSS (deve essere coerente con lo SCSS)
  gap: number = 15; // Valore di default usato nel CSS

  @ViewChild('carouselTrack') carouselTrack!: ElementRef;

  ngAfterViewInit() {
    this.setupSlides();
    this.cdRef.detectChanges();
  }

  setupSlides() {
    if (this.images.length) {
      this.displayImages = [
        this.images[this.images.length - 1],
        ...this.images,
        this.images[0]
      ];
      // Posiziona il track senza animazione iniziale
      this.setTransition(false);
      this.updateTransform();
    }
  }

  /**
   * Abilita o disabilita la transizione sul track.
   */
  setTransition(enable: boolean) {
    const transitionStyle = enable ? 'transform 0.5s ease' : 'none';
    this.carouselTrack.nativeElement.style.transition = transitionStyle;
  }

  /**
   * Calcola la larghezza della slide tenendo conto del container e del gap,
   * e posiziona il track in modo che la slide selezionata (currentIndex) risulti al centro.
   */
  updateTransform() {
    const container = this.carouselTrack.nativeElement.parentElement;
    const containerWidth = container.offsetWidth;
    // Poiché il container mostra 3 slide, sono presenti due gap
    const totalGap = this.gap * 2;
    const slideWidth = (containerWidth - totalGap) / 3;
    // La traslazione: vogliamo che l'elemento selezionato (indice currentIndex) appaia al centro,
    // ossia l'elemento in posizione (currentIndex - 1) parte da 0
    const translateX = - (this.currentIndex - 1) * (slideWidth + this.gap);
    this.carouselTrack.nativeElement.style.transform = `translateX(${translateX}px)`;
  }

  next() {
    if (!this.images.length) { return; }
    // Avanza di una slide con animazione
    this.currentIndex++;
    this.setTransition(true);
    this.updateTransform();
  }

  prev() {
    if (!this.images.length) { return; }
    // Torna indietro di una slide con animazione
    this.currentIndex--;
    this.setTransition(true);
    this.updateTransform();
  }

  /**
   * Gestisce il repositioning quando si arriva alle slide duplicate.
   * Questo metodo viene chiamato al termine della transizione.
   */
  onTransitionEnd() {
    // Se siamo sul duplicato finale (la copia della prima immagine)
    if (this.currentIndex === this.displayImages.length - 1) {
      this.setTransition(false);
      // Riposizioniamo a 1, che corrisponde alla prima immagine reale al centro
      this.currentIndex = 1;
      this.updateTransform();
    }
    // Se siamo sul duplicato iniziale (la copia dell'ultima immagine)
    if (this.currentIndex === 0) {
      this.setTransition(false);
      // L'ultima immagine reale si trova a displayImages.length - 2
      this.currentIndex = this.displayImages.length - 2;
      this.updateTransform();
    }
  }
}
