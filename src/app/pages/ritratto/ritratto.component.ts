import { Component } from '@angular/core';
import { BottomGalleryComponent } from '../../components/home/bottom-gallery/bottom-gallery.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ritratto',
  imports: [
    RouterLink
  ],
  templateUrl: './ritratto.component.html',
  styleUrl: './ritratto.component.scss'
})
export class RitrattoComponent {
}
