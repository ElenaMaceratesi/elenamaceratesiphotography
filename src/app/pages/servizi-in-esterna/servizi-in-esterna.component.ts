import { Component } from '@angular/core';
import { BottomGalleryComponent } from '../../components/home/bottom-gallery/bottom-gallery.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-servizi-in-esterna',
  imports: [
    BottomGalleryComponent,
    RouterLink
  ],
  templateUrl: './servizi-in-esterna.component.html',
  styleUrl: './servizi-in-esterna.component.scss'
})
export class ServiziInEsternaComponent {
  photos = [
    { src: '/assets/home/servizi/esterna/striscia1.jpg', alt: 'Neonato che dorme' },
    { src: '/assets/home/servizi/esterna/striscia2.jpg', alt: 'Famiglia con neonato' },
    { src: '/assets/home/servizi/esterna/striscia3.jpg', alt: 'Coppia con bambino' },
    { src: '/assets/home/servizi/esterna/striscia4.jpg', alt: 'Bambina sorridente' },
    { src: '/assets/home/servizi/esterna/striscia5.jpg', alt: 'Momento familiare' }
  ];
}
