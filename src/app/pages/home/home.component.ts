import { Component } from '@angular/core';
import { GalleryComponent } from '../../components/home/gallery/gallery.component';
import { AboutMeComponent } from '../../components/home/about-me/about-me.component';
import { ReviewComponent } from '../../components/home/review/review.component';
import { ServicesPreviewComponent } from '../../components/home/services-preview/services-preview.component';
import { BottomGalleryComponent } from '../../components/home/bottom-gallery/bottom-gallery.component';

@Component({
  selector: 'app-home',
    imports: [GalleryComponent, AboutMeComponent, ReviewComponent, ServicesPreviewComponent, BottomGalleryComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true
})
export class HomeComponent {

}
