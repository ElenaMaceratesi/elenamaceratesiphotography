import { Component } from '@angular/core';
import { GalleryComponent } from '../../components/home/gallery/gallery.component';
import { AboutMeComponent } from '../../components/home/about-me/about-me.component';
import { ReviewComponent } from '../../components/home/review/review.component';

@Component({
  selector: 'app-home',
    imports: [GalleryComponent, AboutMeComponent, ReviewComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true
})
export class HomeComponent {

}
