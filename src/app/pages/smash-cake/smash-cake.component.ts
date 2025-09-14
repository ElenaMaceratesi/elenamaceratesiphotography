import { Component } from '@angular/core';
import { BottomGalleryComponent } from '../../components/home/bottom-gallery/bottom-gallery.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-smash-cake',
  imports: [
    BottomGalleryComponent,
    RouterLink
  ],
  templateUrl: './smash-cake.component.html',
  styleUrl: './smash-cake.component.scss'
})
export class SmashCakeComponent {
  bottom_photos = [
    { src: '/assets/home/servizi/smash-cake/striscia1.jpg', alt: 'Famiglia con cane' },
    { src: '/assets/home/servizi/smash-cake/striscia2.jpg', alt: 'Donna incinta' },
    { src: '/assets/home/servizi/smash-cake/striscia3.jpg', alt: 'Donna in cinta con altra figlia' },
    { src: '/assets/home/servizi/smash-cake/striscia4.jpg', alt: 'Famiglia' },
    { src: '/assets/home/servizi/smash-cake/striscia5.jpg', alt: 'Donna in cinta con altra figlia' }
  ];

  middle_photos = [
    { src: '/assets/home/servizi/smash-cake/foto2.jpg', alt: 'Coppia in esterna' },
    { src: '/assets/home/servizi/smash-cake/foto3.jpg', alt: 'Coppia con cane' },
    { src: '/assets/home/servizi/smash-cake/foto4.jpg', alt: 'Bacio alla pancia' },
    { src: '/assets/home/servizi/smash-cake/foto5.jpg', alt: 'Mamma in esterna' },
  ]
}
