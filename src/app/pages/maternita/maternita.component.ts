import { Component } from '@angular/core';
import { BottomGalleryComponent } from '../../components/home/bottom-gallery/bottom-gallery.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-maternita',
    imports: [
        BottomGalleryComponent,
        RouterLink
    ],
  templateUrl: './maternita.component.html',
  styleUrl: './maternita.component.scss'
})
export class MaternitaComponent {
    photos = [
        { src: '/assets/home/servizi/maternità/striscia1.jpg', alt: 'Famiglia con cane' },
        { src: '/assets/home/servizi/maternità/striscia2.jpg', alt: 'Donna incinta' },
        { src: '/assets/home/servizi/maternità/striscia3.jpg', alt: 'Donna in cinta con altra figlia' },
        { src: '/assets/home/servizi/maternità/striscia4.jpg', alt: 'Famiglia' },
        { src: '/assets/home/servizi/maternità/striscia5.jpg', alt: 'Donna in cinta con altra figlia' }
    ];
}
