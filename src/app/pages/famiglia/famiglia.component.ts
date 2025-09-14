import { Component } from '@angular/core';
import { BottomGalleryComponent } from '../../components/home/bottom-gallery/bottom-gallery.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-famiglia',
  imports: [
    BottomGalleryComponent,
    RouterLink
  ],
  templateUrl: './famiglia.component.html',
  styleUrl: './famiglia.component.scss'
})
export class FamigliaComponent {
  photos = [
    { src: '/assets/home/servizi/bebe/striscia1.jpg', alt: 'Neonato che dorme' },
    { src: '/assets/home/servizi/bebe/striscia2.jpg', alt: 'Famiglia con neonato' },
    { src: '/assets/home/servizi/bebe/striscia3.jpg', alt: 'Coppia con bambino' },
    { src: '/assets/home/servizi/bebe/striscia4.jpg', alt: 'Bambina sorridente' },
    { src: '/assets/home/servizi/bebe/striscia5.jpg', alt: 'Momento familiare' }
  ];
}
