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

}
