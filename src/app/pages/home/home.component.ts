import { Component } from '@angular/core';
import { GalleryComponent } from '../../components/home/gallery/gallery.component';
import { AboutMeComponent } from '../../components/home/about-me/about-me.component';

@Component({
  selector: 'app-home',
  imports: [GalleryComponent, AboutMeComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true
})
export class HomeComponent {

}
