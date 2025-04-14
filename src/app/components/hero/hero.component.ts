import { Component } from '@angular/core';
import { GalleryComponent } from '../gallery/gallery.component';

@Component({
  selector: 'app-hero',
  imports: [
    GalleryComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  standalone: true
})
export class HeroComponent {

}
