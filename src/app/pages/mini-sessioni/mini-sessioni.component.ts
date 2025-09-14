import { Component } from '@angular/core';
import { BottomGalleryComponent } from '../../components/home/bottom-gallery/bottom-gallery.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mini-sessioni',
  imports: [
    BottomGalleryComponent,
    RouterLink
  ],
  templateUrl: './mini-sessioni.component.html',
  styleUrl: './mini-sessioni.component.scss'
})
export class MiniSessioniComponent {
  photos = [
    { src: '/assets/home/servizi/mini/striscia1.jpg', alt: 'Neonato che dorme' },
    { src: '/assets/home/servizi/mini/striscia2.jpg', alt: 'Famiglia con neonato' },
    { src: '/assets/home/servizi/mini/striscia3.jpg', alt: 'Coppia con bambino' },
    { src: '/assets/home/servizi/mini/striscia4.jpg', alt: 'Bambina sorridente' },
    { src: '/assets/home/servizi/mini/striscia5.jpg', alt: 'Momento familiare' }
  ];
}
