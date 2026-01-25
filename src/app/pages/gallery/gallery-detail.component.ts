import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GalleryServiziService, GalleryPhoto } from '../../helper/gallery/gallery-servizi.service';
import { LightboxComponent } from '../../components/lightbox/lightbox.component';

@Component({
  selector: 'app-gallery-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, LightboxComponent],
  templateUrl: './gallery-detail.component.html',
  styleUrl: './gallery-detail.component.scss'
})
export class GalleryDetailComponent implements OnInit {
  @ViewChild('lightbox') lightbox!: LightboxComponent;

  detailPhotos: GalleryPhoto[] = [];
  servizioName: string = '';
  bannerImage: string = '';
  lightboxOpen: boolean = false;
  private servizio: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private galleryService: GalleryServiziService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.servizio = params['servizio'];
      this.servizioName = this.galleryService.getServizioName(this.servizio);
      this.bannerImage = this.galleryService.getBanner(this.servizio);
      
      // Get the person index from query params
      this.route.queryParams.subscribe(queryParams => {
        const personIndex = parseInt(queryParams['person'], 10) || 0;
        const photos = this.galleryService.getGalleryPhotos(this.servizio);
        
        if (photos && photos[personIndex] && 'detailedPhotos' in photos[personIndex]) {
          this.detailPhotos = (photos[personIndex] as any).detailedPhotos || [];
        }
      });
    });
  }

  openLightbox(index: number) {
    this.lightboxOpen = true;
    setTimeout(() => {
      if (this.lightbox) {
        this.lightbox.openPhoto(index);
      }
    }, 0);
  }

  closeLightbox() {
    this.lightboxOpen = false;
  }

  goBack() {
    window.history.back();
  }
}
