import { Component } from '@angular/core';
import { GalleryComponent } from "../../components/home/gallery/gallery.component";

@Component({
  selector: 'app-portflio',
  imports: [GalleryComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  standalone: true
})
export class PortfolioComponent {

}
