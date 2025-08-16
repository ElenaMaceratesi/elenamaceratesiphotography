import { Component } from '@angular/core';
import { BottomGalleryComponent } from '../../components/home/bottom-gallery/bottom-gallery.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-primi-mesi',
    imports: [
        BottomGalleryComponent,
        RouterLink
    ],
  templateUrl: './primi-mesi.component.html',
  styleUrl: './primi-mesi.component.scss'
})
export class PrimiMesiComponent {
    photos = [
        { src: '/assets/home/servizi/primimesi/striscia1.jpg', alt: 'Neonato che dorme' },
        { src: '/assets/home/servizi/primimesi/striscia2.jpg', alt: 'Famiglia con neonato' },
        { src: '/assets/home/servizi/primimesi/striscia3.jpg', alt: 'Coppia con bambino' },
        { src: '/assets/home/servizi/primimesi/striscia4.jpg', alt: 'Bambina sorridente' },
        { src: '/assets/home/servizi/primimesi/striscia5.jpg', alt: 'Momento familiare' }
    ];
}
