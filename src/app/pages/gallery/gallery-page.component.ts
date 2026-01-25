import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GalleryServiziService, GalleryPhoto } from '../../helper/gallery/gallery-servizi.service';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './gallery-page.component.html',
  styleUrl: './gallery-page.component.scss'
})
export class GalleryPageComponent implements OnInit {
  photos: GalleryPhoto[] = [];
  servizioName: string = '';
  bannerImage: string = '';
  private servizio: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private galleryService: GalleryServiziService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.servizio = params['servizio'];
      this.photos = this.galleryService.getGalleryPhotos(this.servizio);
      this.servizioName = this.galleryService.getServizioName(this.servizio);
      this.bannerImage = this.galleryService.getBanner(this.servizio);
    });
  }

  navigateToDetail(personIndex: number) {
    this.router.navigate([`/gallery/${this.servizio}/detail`], {
      queryParams: { person: personIndex }
    });
  }

  goBack() {
    window.history.back();
  }
}
