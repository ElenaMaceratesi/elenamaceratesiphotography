import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { GalleryComponent } from "../../components/gallery/gallery.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, GalleryComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true
})
export class HomeComponent {

}
