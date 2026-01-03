import { Component } from '@angular/core';
import { BottomGalleryComponent } from '../../components/home/bottom-gallery/bottom-gallery.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-newborn',
    imports: [
        BottomGalleryComponent,
        RouterLink
    ],
  templateUrl: './newborn.component.html',
  styleUrl: './newborn.component.scss'
})
export class NewbornComponent {
    bottom_photos = [
        { src: '/assets/home/servizi/newborn/striscia1.jpg', alt: 'Famiglia con cane' },
        { src: '/assets/home/servizi/newborn/striscia2.jpg', alt: 'Donna incinta' },
        { src: '/assets/home/servizi/newborn/striscia3.jpg', alt: 'Donna in cinta con altra figlia' },
        { src: '/assets/home/servizi/newborn/striscia4.jpg', alt: 'Famiglia' },
        { src: '/assets/home/servizi/newborn/striscia5.jpg', alt: 'Donna in cinta con altra figlia' }
    ];

    middle_photos = [
        { src: '/assets/home/servizi/newborn/foto2.jpg', alt: 'Coppia in esterna' },
        { src: '/assets/home/servizi/newborn/foto3.jpg', alt: 'Coppia con cane' },
        { src: '/assets/home/servizi/newborn/foto4.jpg', alt: 'Bacio alla pancia' },
        { src: '/assets/home/servizi/newborn/foto5.jpg', alt: 'Mamma in esterna' },
    ]
}
