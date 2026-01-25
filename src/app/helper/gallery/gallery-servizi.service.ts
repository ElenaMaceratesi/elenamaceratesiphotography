import { Injectable } from '@angular/core';

export interface GalleryPhoto {
  src: string;
  alt: string;
  nome?: string;
}

export interface PhotoConDettagli extends GalleryPhoto {
  detailedPhotos: GalleryPhoto[];
}

export interface ServiziGalleryInfo {
  photos: PhotoConDettagli[];
  banner: string;
  nome: string;
}

@Injectable({
  providedIn: 'root'
})
export class GalleryServiziService {

  private serviziFotograficiGallery: { [key: string]: ServiziGalleryInfo } = {
    'maternita': {
      banner: '/assets/home/servizi/maternità/copertina.jpg',
      nome: 'Maternità',
      photos: [
        { 
          src: '/assets/home/servizi/maternità/gallery/chiara&marco/foto13.jpg', 
          alt: 'Servizio maternità Chiara e Marco', 
          nome: 'Chiara & Marco',
          detailedPhotos: [
            { src: '/assets/home/servizi/maternità/gallery/chiara&marco/foto1.jpg', alt: 'Servizio maternità Chiara e Marco' },
            { src: '/assets/home/servizi/maternità/gallery/chiara&marco/foto2.jpg', alt: 'Servizio maternità Chiara e Marco' },
            { src: '/assets/home/servizi/maternità/gallery/chiara&marco/foto3.jpg', alt: 'Servizio maternità Chiara e Marco' },
            { src: '/assets/home/servizi/maternità/gallery/chiara&marco/foto4.jpg', alt: 'CServizio maternità Chiara e Marco' },
            { src: '/assets/home/servizi/maternità/gallery/chiara&marco/foto5.jpg', alt: 'Servizio maternità Chiara e Marco' },
            { src: '/assets/home/servizi/maternità/gallery/chiara&marco/foto6.jpg', alt: 'Servizio maternità Chiara e Marco' },
            { src: '/assets/home/servizi/maternità/gallery/chiara&marco/foto7.jpg', alt: 'Servizio maternità Chiara e Marco' },
            { src: '/assets/home/servizi/maternità/gallery/chiara&marco/foto8.jpg', alt: 'Servizio maternità Chiara e Marco' },
            { src: '/assets/home/servizi/maternità/gallery/chiara&marco/foto9.jpg', alt: 'Servizio maternità Chiara e Marco' },
            { src: '/assets/home/servizi/maternità/gallery/chiara&marco/foto10.jpg', alt: 'Servizio maternità Chiara e Marco' },
            { src: '/assets/home/servizi/maternità/gallery/chiara&marco/foto11.jpg', alt: 'Servizio maternità Chiara e Marco' },
            { src: '/assets/home/servizi/maternità/gallery/chiara&marco/foto12.jpg', alt: 'Servizio maternità Chiara e Marco' },
            { src: '/assets/home/servizi/maternità/gallery/chiara&marco/foto13.jpg', alt: 'Servizio maternità Chiara e Marco' },
            { src: '/assets/home/servizi/maternità/gallery/chiara&marco/foto14.jpg', alt: 'Servizio maternità Chiara e Marco' },
            { src: '/assets/home/servizi/maternità/gallery/chiara&marco/foto15.jpg', alt: 'Servizio maternità Chiara e Marco' },
            { src: '/assets/home/servizi/maternità/gallery/chiara&marco/foto16.jpg', alt: 'Servizio maternità Chiara e Marco' },
            { src: '/assets/home/servizi/maternità/gallery/chiara&marco/foto17.jpg', alt: 'Servizio maternità Chiara e Marco' },
            { src: '/assets/home/servizi/maternità/gallery/chiara&marco/foto18.jpg', alt: 'Servizio maternità Chiara e Marco' }
          ]
        },
        { 
          src: '/assets/home/servizi/maternità/gallery/marina&matteo/foto8.jpg', 
          alt: 'Servizio maternità Marina e Matteo', 
          nome: 'Marina & Matteo',
          detailedPhotos: [
            { src: '/assets/home/servizi/maternità/gallery/marina&matteo/foto1.jpg', alt: 'Servizio maternità Marina e Matteo' },
            { src: '/assets/home/servizi/maternità/gallery/marina&matteo/foto2.jpg', alt: 'Servizio maternità Marina e Matteo' },
            { src: '/assets/home/servizi/maternità/gallery/marina&matteo/foto3.jpg', alt: 'Servizio maternità Marina e Matteo' },
            { src: '/assets/home/servizi/maternità/gallery/marina&matteo/foto4.jpg', alt: 'Servizio maternità Marina e Matteo' },
            { src: '/assets/home/servizi/maternità/gallery/marina&matteo/foto5.jpg', alt: 'Servizio maternità Marina e Matteo' },
            { src: '/assets/home/servizi/maternità/gallery/marina&matteo/foto6.jpg', alt: 'Servizio maternità Marina e Matteo' },
            { src: '/assets/home/servizi/maternità/gallery/marina&matteo/foto7.jpg', alt: 'Servizio maternità Marina e Matteo' },
            { src: '/assets/home/servizi/maternità/gallery/marina&matteo/foto8.jpg', alt: 'Servizio maternità Marina e Matteo' },
            { src: '/assets/home/servizi/maternità/gallery/marina&matteo/foto9.jpg', alt: 'Servizio maternità Marina e Matteo' },
            { src: '/assets/home/servizi/maternità/gallery/marina&matteo/foto10.jpg', alt: 'Servizio maternità Marina e Matteo' }
          
          ]
        },
        { 
          src: '/assets/home/servizi/maternità/gallery/francesca&gabriel/foto1.jpg', 
          alt: 'Servizio maternità Francesca e Gabriel', 
          nome: 'Francesca & Gabriel',
          detailedPhotos: [
            { src: '/assets/home/servizi/maternità/gallery/francesca&gabriel/foto1.jpg', alt: 'Servizio maternità Francesca e Gabriel' },
            { src: '/assets/home/servizi/maternità/gallery/francesca&gabriel/foto2.jpg', alt: 'Servizio maternità Francesca e Gabriel' },
            { src: '/assets/home/servizi/maternità/gallery/francesca&gabriel/foto3.jpg', alt: 'Servizio maternità Francesca e Gabriel' },
            { src: '/assets/home/servizi/maternità/gallery/francesca&gabriel/foto4.jpg', alt: 'Servizio maternità Francesca e Gabriel' },
            { src: '/assets/home/servizi/maternità/gallery/francesca&gabriel/foto5.jpg', alt: 'Servizio maternità Francesca e Gabriel' },
            { src: '/assets/home/servizi/maternità/gallery/francesca&gabriel/foto6.jpg', alt: 'Servizio maternità Francesca e Gabriel' },
            { src: '/assets/home/servizi/maternità/gallery/francesca&gabriel/foto7.jpg', alt: 'Servizio maternità Francesca e Gabriel' },
            { src: '/assets/home/servizi/maternità/gallery/francesca&gabriel/foto8.jpg', alt: 'Servizio maternità Francesca e Gabriel' },
            { src: '/assets/home/servizi/maternità/gallery/francesca&gabriel/foto9.jpg', alt: 'Servizio maternità Francesca e Gabriel' },
            { src: '/assets/home/servizi/maternità/gallery/francesca&gabriel/foto10.jpg', alt: 'Servizio maternità Francesca e Gabriel' },
            { src: '/assets/home/servizi/maternità/gallery/francesca&gabriel/foto11.jpg', alt: 'Servizio maternità Francesca e Gabriel' },
            { src: '/assets/home/servizi/maternità/gallery/francesca&gabriel/foto12.jpg', alt: 'Servizio maternità Francesca e Gabriel' },
            { src: '/assets/home/servizi/maternità/gallery/francesca&gabriel/foto13.jpg', alt: 'Servizio maternità Francesca e Gabriel' },
            { src: '/assets/home/servizi/maternità/gallery/francesca&gabriel/foto14.jpg', alt: 'Servizio maternità Francesca e Gabriel' }
          ]
        }
      ]
    },
    'newborn': {
      banner: '/assets/home/servizi/newborn/copertina.jpg',
      nome: 'Newborn',
      photos: [
        { src: '/assets/home/servizi/newborn/gallery/silvia/foto9.jpg',
          alt: 'Servizio newborn Silvia', 
          nome: 'Silvia',
          detailedPhotos: [
            { src:  '/assets/home/servizi/newborn/gallery/silvia/foto1.jpg', alt: 'Servizio newborn Silvia' },
            { src: '/assets/home/servizi/newborn/gallery/silvia/foto2.jpg', alt: 'Servizio newborn Silvia' },
            { src: '/assets/home/servizi/newborn/gallery/silvia/foto3.jpg', alt: 'Servizio newborn Silvia' },
            { src: '/assets/home/servizi/newborn/gallery/silvia/foto4.jpg', alt: 'Servizio newborn Silvia' },
            { src: '/assets/home/servizi/newborn/gallery/silvia/foto5.jpg', alt: 'Servizio newborn Silvia' },
            { src: '/assets/home/servizi/newborn/gallery/silvia/foto6.jpg', alt: 'Servizio newborn Silvia' },
            { src: '/assets/home/servizi/newborn/gallery/silvia/foto7.jpg', alt: 'Servizio newborn Silvia' },
            { src: '/assets/home/servizi/newborn/gallery/silvia/foto8.jpg', alt: 'Servizio newborn Silvia' },
            { src: '/assets/home/servizi/newborn/gallery/silvia/foto9.jpg', alt: 'Servizio newborn Silvia' },
            { src: '/assets/home/servizi/newborn/gallery/silvia/foto10.jpg', alt: 'Servizio newborn Silvia' },
            { src: '/assets/home/servizi/newborn/gallery/silvia/foto11.jpg', alt: 'Servizio newborn Silvia' },
            { src: '/assets/home/servizi/newborn/gallery/silvia/foto12.jpg', alt: 'Servizio newborn Silvia' },
            { src: '/assets/home/servizi/newborn/gallery/silvia/foto13.jpg', alt: 'Servizio newborn Silvia' },
            { src: '/assets/home/servizi/newborn/gallery/silvia/foto14.jpg', alt: 'Servizio newborn Silvia' },
            { src: '/assets/home/servizi/newborn/gallery/silvia/foto15.jpg', alt: 'Servizio newborn Silvia' }

          ]
        },
        { 
          src: '/assets/home/servizi/newborn/gallery/anita/foto1.jpg', 
          alt: 'Servizio newborn Anita', 
          nome: 'Anita',
          detailedPhotos: [
            { src: '/assets/home/servizi/newborn/gallery/anita/foto1.jpg', alt: 'Servizio newborn Anita' },
            { src: '/assets/home/servizi/newborn/gallery/anita/foto2.jpg', alt: 'Servizio newborn Anita' },
            { src: '/assets/home/servizi/newborn/gallery/anita/foto3.jpg', alt: 'Servizio newborn Anita' },
            { src: '/assets/home/servizi/newborn/gallery/anita/foto4.jpg', alt: 'Servizio newborn Anita' },
            { src: '/assets/home/servizi/newborn/gallery/anita/foto5.jpg', alt: 'Servizio newborn Anita' },
            { src: '/assets/home/servizi/newborn/gallery/anita/foto6.jpg', alt: 'Servizio newborn Anita' },
            { src: '/assets/home/servizi/newborn/gallery/anita/foto7.jpg', alt: 'Servizio newborn Anita' },
            { src: '/assets/home/servizi/newborn/gallery/anita/foto8.jpg', alt: 'Servizio newborn Anita' },
            { src: '/assets/home/servizi/newborn/gallery/anita/foto9.jpg', alt: 'Servizio newborn Anita' },
            { src: '/assets/home/servizi/newborn/gallery/anita/foto10.jpg', alt: 'Servizio newborn Anita' },
            { src: '/assets/home/servizi/newborn/gallery/anita/foto11.jpg', alt: 'Servizio newborn Anita' },
            { src: '/assets/home/servizi/newborn/gallery/anita/foto12.jpg', alt: 'Servizio newborn Anita' }
          ]
        },
        { 
          src: '/assets/home/servizi/newborn/gallery/filippo/foto2.jpg', 
          alt: 'Servizio newborn Filippo', 
          nome: 'Filippo',
          detailedPhotos: [
            { src: '/assets/home/servizi/newborn/gallery/filippo/foto1.jpg', alt: 'Servizio newborn Filippo' },
            { src: '/assets/home/servizi/newborn/gallery/filippo/foto2.jpg', alt: 'Servizio newborn Filippo' },
            { src: '/assets/home/servizi/newborn/gallery/filippo/foto3.jpg', alt: 'Servizio newborn Filippo' },
            { src: '/assets/home/servizi/newborn/gallery/filippo/foto4.jpg', alt: 'Servizio newborn Filippo' },
            { src: '/assets/home/servizi/newborn/gallery/filippo/foto5.jpg', alt: 'Servizio newborn Filippo' },
            { src: '/assets/home/servizi/newborn/gallery/filippo/foto6.jpg', alt: 'Servizio newborn Filippo' },
            { src: '/assets/home/servizi/newborn/gallery/filippo/foto7.jpg', alt: 'Servizio newborn Filippo' },
            { src: '/assets/home/servizi/newborn/gallery/filippo/foto8.jpg', alt: 'Servizio newborn Filippo' },
            { src: '/assets/home/servizi/newborn/gallery/filippo/foto9.jpg', alt: 'Servizio newborn Filippo' },
            { src: '/assets/home/servizi/newborn/gallery/filippo/foto10.jpg', alt: 'Servizio newborn Filippo' },
            { src: '/assets/home/servizi/newborn/gallery/filippo/foto11.jpg', alt: 'Servizio newborn Filippo' },
            { src: '/assets/home/servizi/newborn/gallery/filippo/foto12.jpg', alt: 'Servizio newborn Filippo' }
          ]
        }
      ]
    },
    'primi-mesi': {
      banner: '/assets/home/servizi/primimesi/copertina.jpg',
      nome: 'Primi Mesi',
      photos: [
        { 
          src: '/assets/home/servizi/primimesi/gallery/edoardo/foto15.jpg', 
          alt: 'Servizio primi mesi Edoardo', 
          nome: 'Edoardo',
          detailedPhotos: [
            { src: '/assets/home/servizi/primimesi/gallery/edoardo/foto1.jpg', alt: 'Servizio primi mesi Edoardo' },
            { src: '/assets/home/servizi/primimesi/gallery/edoardo/foto2.jpg', alt: 'Servizio primi mesi Edoardo' },
            { src: '/assets/home/servizi/primimesi/gallery/edoardo/foto3.jpg', alt: 'Servizio primi mesi Edoardo' },
            { src: '/assets/home/servizi/primimesi/gallery/edoardo/foto4.jpg', alt: 'Servizio primi mesi Edoardo' },
            { src: '/assets/home/servizi/primimesi/gallery/edoardo/foto5.jpg', alt: 'Servizio primi mesi Edoardo' },
            { src: '/assets/home/servizi/primimesi/gallery/edoardo/foto6.jpg', alt: 'Servizio primi mesi Edoardo' },
            { src: '/assets/home/servizi/primimesi/gallery/edoardo/foto7.jpg', alt: 'Servizio primi mesi Edoardo' },
            { src: '/assets/home/servizi/primimesi/gallery/edoardo/foto8.jpg', alt: 'Servizio primi mesi Edoardo' },
            { src: '/assets/home/servizi/primimesi/gallery/edoardo/foto9.jpg', alt: 'Servizio primi mesi Edoardo' },
            { src: '/assets/home/servizi/primimesi/gallery/edoardo/foto10.jpg', alt: 'Servizio primi mesi Edoardo' },
            { src: '/assets/home/servizi/primimesi/gallery/edoardo/foto11.jpg', alt: 'Servizio primi mesi Edoardo' },
            { src: '/assets/home/servizi/primimesi/gallery/edoardo/foto12.jpg', alt: 'Servizio primi mesi Edoardo' },
            { src: '/assets/home/servizi/primimesi/gallery/edoardo/foto13.jpg', alt: 'Servizio primi mesi Edoardo' },
            { src: '/assets/home/servizi/primimesi/gallery/edoardo/foto14.jpg', alt: 'Servizio primi mesi Edoardo' },
            { src: '/assets/home/servizi/primimesi/gallery/edoardo/foto15.jpg', alt: 'Servizio primi mesi Edoardo' },
            { src: '/assets/home/servizi/primimesi/gallery/edoardo/foto16.jpg', alt: 'Servizio primi mesi Edoardo' },
            { src: '/assets/home/servizi/primimesi/gallery/edoardo/foto17.jpg', alt: 'Servizio primi mesi Edoardo' },
            { src: '/assets/home/servizi/primimesi/gallery/edoardo/foto18.jpg', alt: 'Servizio primi mesi Edoardo' }
          ]
        },
        { 
          src: '/assets/home/servizi/primimesi/gallery/amelie/foto11.jpg', 
          alt: 'Servizio primi mesi Amelie', 
          nome: 'Amelie',
          detailedPhotos: [
            { src: '/assets/home/servizi/primimesi/gallery/amelie/foto1.jpg', alt: 'Servizio primi mesi Amelie' },
            { src: '/assets/home/servizi/primimesi/gallery/amelie/foto2.jpg', alt: 'Servizio primi mesi Amelie' },
            { src: '/assets/home/servizi/primimesi/gallery/amelie/foto3.jpg', alt: 'Servizio primi mesi Amelie' },
            { src: '/assets/home/servizi/primimesi/gallery/amelie/foto4.jpg', alt: 'Servizio primi mesi Amelie' },
            { src: '/assets/home/servizi/primimesi/gallery/amelie/foto5.jpg', alt: 'Servizio primi mesi Amelie' },
            { src: '/assets/home/servizi/primimesi/gallery/amelie/foto6.jpg', alt: 'Servizio primi mesi Amelie' },
            { src: '/assets/home/servizi/primimesi/gallery/amelie/foto7.jpg', alt: 'Servizio primi mesi Amelie' },
            { src: '/assets/home/servizi/primimesi/gallery/amelie/foto8.jpg', alt: 'Servizio primii mesi Amelie' },
            { src: '/assets/home/servizi/primimesi/gallery/amelie/foto9.jpg', alt: 'Servizio primi mesi Amelie' },
            { src: '/assets/home/servizi/primimesi/gallery/amelie/foto10.jpg', alt: 'Servizio primi mesi Amelie' },
            { src: '/assets/home/servizi/primimesi/gallery/amelie/foto11.jpg', alt: 'Servizio primi mesi Amelie' },
            { src: '/assets/home/servizi/primimesi/gallery/amelie/foto12.jpg', alt: 'Servizio primi mesi Amelie' },
            { src: '/assets/home/servizi/primimesi/gallery/amelie/foto13.jpg', alt: 'Servizio primi mesi Amelie' },
            { src: '/assets/home/servizi/primimesi/gallery/amelie/foto14.jpg', alt: 'Servizio primi mesi Amelie' },
            { src: '/assets/home/servizi/primimesi/gallery/amelie/foto15.jpg', alt: 'Servizio primi mesi Amelie' },
          ]
        },
        { 
          src: '/assets/home/servizi/primimesi/gallery/damiano/foto11.jpg', 
          alt: 'Servizio primi mesi Damiano', 
          nome: 'Damiano',
          detailedPhotos: [
            { src: '/assets/home/servizi/primimesi/gallery/damiano/foto1.jpg', alt: 'Servizio primi mesi Damiano' },
            { src: '/assets/home/servizi/primimesi/gallery/damiano/foto2.jpg', alt: 'Servizio primi mesi Damiano' },
            { src: '/assets/home/servizi/primimesi/gallery/damiano/foto3.jpg', alt: 'Servizio primi mesi Damiano' },
            { src: '/assets/home/servizi/primimesi/gallery/damiano/foto4.jpg', alt: 'Servizio primi mesi Damiano' },
            { src: '/assets/home/servizi/primimesi/gallery/damiano/foto5.jpg', alt: 'Servizio primi mesi Damiano' },
            { src: '/assets/home/servizi/primimesi/gallery/damiano/foto6.jpg', alt: 'Servizio primi mesi Damiano' },
            { src: '/assets/home/servizi/primimesi/gallery/damiano/foto7.jpg', alt: 'Servizio primi mesi Damiano' },
            { src: '/assets/home/servizi/primimesi/gallery/damiano/foto8.jpg', alt: 'Servizio primi mesi Damiano' },
            { src: '/assets/home/servizi/primimesi/gallery/damiano/foto9.jpg', alt: 'Servizio primi mesi Damiano' },
            { src: '/assets/home/servizi/primimesi/gallery/damiano/foto10.jpg', alt: 'Servizio primi mesi Damiano' },
            { src: '/assets/home/servizi/primimesi/gallery/damiano/foto11.jpg', alt: 'Servizio primi mesi Damiano' },
            { src: '/assets/home/servizi/primimesi/gallery/damiano/foto12.jpg', alt: 'Servizio primi mesi Damiano' },
            { src: '/assets/home/servizi/primimesi/gallery/damiano/foto13.jpg', alt: 'Servizio primi mesi Damiano' },
            { src: '/assets/home/servizi/primimesi/gallery/damiano/foto14.jpg', alt: 'Servizio primi mesi Damiano' },
            { src: '/assets/home/servizi/primimesi/gallery/damiano/foto15.jpg', alt: 'Servizio primi mesi Damiano' }
          ]
        }
      ]
    },
    'bebe': {
      banner: '/assets/home/servizi/bebe/copertina.jpg',
      nome: 'Bebè',
      photos: [
        { 
          src: '/assets/home/servizi/bebe/gallery/beatrice/foto13.jpg', 
          alt: 'Servizio Bebè Beatrice', 
          nome: 'Beatrice',
          detailedPhotos: [
            { src: '/assets/home/servizi/bebe/gallery/beatrice/foto1.jpg', alt: 'Servizio Bebè Beatrice' },
            { src: '/assets/home/servizi/bebe/gallery/beatrice/foto2.jpg', alt: 'Servizio Bebè Beatrice' },
            { src: '/assets/home/servizi/bebe/gallery/beatrice/foto3.jpg', alt: 'Servizio Bebè Beatrice' },
            { src: '/assets/home/servizi/bebe/gallery/beatrice/foto4.jpg', alt: 'Servizio Bebè Beatrice' },
            { src: '/assets/home/servizi/bebe/gallery/beatrice/foto5.jpg', alt: 'Servizio Bebè Beatrice' },
            { src: '/assets/home/servizi/bebe/gallery/beatrice/foto6.jpg', alt: 'Servizio Bebè Beatrice' },
            { src: '/assets/home/servizi/bebe/gallery/beatrice/foto7.jpg', alt: 'Servizio Bebè Beatrice' },
            { src: '/assets/home/servizi/bebe/gallery/beatrice/foto8.jpg', alt: 'Servizio Bebè Beatrice' },
            { src: '/assets/home/servizi/bebe/gallery/beatrice/foto9.jpg', alt: 'Servizio Bebè Beatrice' },
            { src: '/assets/home/servizi/bebe/gallery/beatrice/foto10.jpg', alt: 'Servizio Bebè Beatrice' },
            { src: '/assets/home/servizi/bebe/gallery/beatrice/foto11.jpg', alt: 'Servizio Bebè Beatrice' },
            { src: '/assets/home/servizi/bebe/gallery/beatrice/foto12.jpg', alt: 'Servizio Bebè Beatrice' },
            { src: '/assets/home/servizi/bebe/gallery/beatrice/foto13.jpg', alt: 'Servizio Bebè Beatrice' },
            { src: '/assets/home/servizi/bebe/gallery/beatrice/foto14.jpg', alt: 'Servizio Bebè Beatrice' },
            { src: '/assets/home/servizi/bebe/gallery/beatrice/foto15.jpg', alt: 'Servizio Bebè Beatrice' },
            { src: '/assets/home/servizi/bebe/gallery/beatrice/foto16.jpg', alt: 'Servizio Bebè Beatrice' },
            { src: '/assets/home/servizi/bebe/gallery/beatrice/foto17.jpg', alt: 'Servizio Bebè Beatrice' },
            { src: '/assets/home/servizi/bebe/gallery/beatrice/foto18.jpg', alt: 'Servizio Bebè Beatrice' }
          ]
        },
      ]
      },
    'smash-cake': {
      banner: '/assets/home/servizi/smash-cake/copertina.jpg',
      nome: 'Smash Cake',
      photos: [
        { 
          src: '/assets/home/servizi/smash-cake/gallery/azzurra/foto14.jpg', 
          alt: 'Servizio Smash Cake Azzurra', 
          nome: 'Azzurra',
          detailedPhotos: [
            { src: '/assets/home/servizi/smash-cake/gallery/azzurra/foto1.jpg', alt: 'Servizio smash cake Azzurra' },
            { src: '/assets/home/servizi/smash-cake/gallery/azzurra/foto2.jpg', alt: 'Servizio smash cake Azzurra' },
            { src: '/assets/home/servizi/smash-cake/gallery/azzurra/foto3.jpg', alt: 'Servizio smash cake Azzurra' },
            { src: '/assets/home/servizi/smash-cake/gallery/azzurra/foto4.jpg', alt: 'Servizio smash cake Azzurra' },
            { src: '/assets/home/servizi/smash-cake/gallery/azzurra/foto5.jpg', alt: 'Servizio smash cake Azzurra' },
            { src: '/assets/home/servizi/smash-cake/gallery/azzurra/foto6.jpg', alt: 'Servizio smash cake Azzurra' },
            { src: '/assets/home/servizi/smash-cake/gallery/azzurra/foto7.jpg', alt: 'Servizio smash cake Azzurra' },
            { src: '/assets/home/servizi/smash-cake/gallery/azzurra/foto8.jpg', alt: 'Servizio smash cake Azzurra' },
            { src: '/assets/home/servizi/smash-cake/gallery/azzurra/foto9.jpg', alt: 'Servizio smash cake Azzurra' },
            { src: '/assets/home/servizi/smash-cake/gallery/azzurra/foto10.jpg', alt: 'Servizio smash cake Azzurra' },
            { src: '/assets/home/servizi/smash-cake/gallery/azzurra/foto11.jpg', alt: 'Servizio smash cake Azzurra' },
            { src: '/assets/home/servizi/smash-cake/gallery/azzurra/foto12.jpg', alt: 'Servizio smash cake Azzurra' },
            { src: '/assets/home/servizi/smash-cake/gallery/azzurra/foto13.jpg', alt: 'Servizio smash cake Azzurra' },
            { src: '/assets/home/servizi/smash-cake/gallery/azzurra/foto14.jpg', alt: 'Servizio smash cake Azzurra' },
            { src: '/assets/home/servizi/smash-cake/gallery/azzurra/foto15.jpg', alt: 'Servizio smash cake Azzurra' },
            { src: '/assets/home/servizi/smash-cake/gallery/azzurra/foto16.jpg', alt: 'Servizio smash cake Azzurra' },
            { src: '/assets/home/servizi/smash-cake/gallery/azzurra/foto17.jpg', alt: 'Servizio smash cake Azzurra' },
            { src: '/assets/home/servizi/smash-cake/gallery/azzurra/foto18.jpg', alt: 'Servizio smash cake Azzurra' },
            { src: '/assets/home/servizi/smash-cake/gallery/azzurra/foto19.jpg', alt: 'Servizio smash cake Azzurra' },
            { src: '/assets/home/servizi/smash-cake/gallery/azzurra/foto20.jpg', alt: 'Servizio smash cake Azzurra' },
            { src: '/assets/home/servizi/smash-cake/gallery/azzurra/foto21.jpg', alt: 'Servizio smash cake Azzurra' }


        
          ]
        },
        { 
          src: '/assets/home/servizi/smash-cake/gallery/lorenzo/foto8.jpg', 
          alt: 'Servizio Smash Cake Lorenzo', 
          nome: 'Lorenzo',
          detailedPhotos: [
            { src: '/assets/home/servizi/smash-cake/gallery/lorenzo/foto1.jpg', alt: 'Servizio smash cake Lorenzo' },
            { src: '/assets/home/servizi/smash-cake/gallery/lorenzo/foto2.jpg', alt: 'Servizio smash cake Lorenzo' },
            { src: '/assets/home/servizi/smash-cake/gallery/lorenzo/foto3.jpg', alt: 'Servizio smash cake Lorenzo' },
            { src: '/assets/home/servizi/smash-cake/gallery/lorenzo/foto4.jpg', alt: 'Servizio smash cake Lorenzo' },
            { src: '/assets/home/servizi/smash-cake/gallery/lorenzo/foto5.jpg', alt: 'Servizio smash cake Lorenzo' },
            { src: '/assets/home/servizi/smash-cake/gallery/lorenzo/foto6.jpg', alt: 'Servizio smash cake Lorenzo' },
            { src: '/assets/home/servizi/smash-cake/gallery/lorenzo/foto7.jpg', alt: 'Servizio smash cake Lorenzo' },
            { src: '/assets/home/servizi/smash-cake/gallery/lorenzo/foto8.jpg', alt: 'Servizio smash cake Lorenzo' },
            { src: '/assets/home/servizi/smash-cake/gallery/lorenzo/foto9.jpg', alt: 'Servizio smash cake Lorenzo' },
            { src: '/assets/home/servizi/smash-cake/gallery/lorenzo/foto10.jpg', alt: 'Servizio smash cake Lorenzo' },
            { src: '/assets/home/servizi/smash-cake/gallery/lorenzo/foto11.jpg', alt: 'Servizio smash cake Lorenzo' },
            { src: '/assets/home/servizi/smash-cake/gallery/lorenzo/foto12.jpg', alt: 'Servizio smash cake Lorenzo' },
            { src: '/assets/home/servizi/smash-cake/gallery/lorenzo/foto13.jpg', alt: 'Servizio smash cake Lorenzo' },
            { src: '/assets/home/servizi/smash-cake/gallery/lorenzo/foto14.jpg', alt: 'Servizio smash cake Lorenzo' },
            { src: '/assets/home/servizi/smash-cake/gallery/lorenzo/foto15.jpg', alt: 'Servizio smash cake Lorenzo' },
            { src: '/assets/home/servizi/smash-cake/gallery/lorenzo/foto16.jpg', alt: 'Servizio smash cake Lorenzo' },
            { src: '/assets/home/servizi/smash-cake/gallery/lorenzo/foto17.jpg', alt: 'Servizio smash cake Lorenzo' },

          ]
        },
        { 
          src: '/assets/home/servizi/smash-cake/gallery/matilde/foto11.jpg', 
          alt: 'Servizio smash cake Matilde', 
          nome: 'Matilde',
          detailedPhotos: [
            { src: '/assets/home/servizi/smash-cake/gallery/matilde/foto1.jpg', alt: 'Servizio smash cake Matilde' },
            { src: '/assets/home/servizi/smash-cake/gallery/matilde/foto2.jpg', alt: 'Servizio smash cake Matilde' },
            { src: '/assets/home/servizi/smash-cake/gallery/matilde/foto3.jpg', alt: 'Servizio smash cake Matilde' },
            { src: '/assets/home/servizi/smash-cake/gallery/matilde/foto4.jpg', alt: 'Servizio smash cake Matilde' },
            { src: '/assets/home/servizi/smash-cake/gallery/matilde/foto5.jpg', alt: 'Servizio smash cake Matilde' },
            { src: '/assets/home/servizi/smash-cake/gallery/matilde/foto6.jpg', alt: 'Servizio smash cake Matilde' },
            { src: '/assets/home/servizi/smash-cake/gallery/matilde/foto7.jpg', alt: 'Servizio smash cake Matilde' },
            { src: '/assets/home/servizi/smash-cake/gallery/matilde/foto8.jpg', alt: 'Servizio smash cake Matilde' },
            { src: '/assets/home/servizi/smash-cake/gallery/matilde/foto9.jpg', alt: 'Servizio smash cake Matilde' },
            { src: '/assets/home/servizi/smash-cake/gallery/matilde/foto10.jpg', alt: 'Servizio smash cake Matilde' },
            { src: '/assets/home/servizi/smash-cake/gallery/matilde/foto11.jpg', alt: 'Servizio smash cake Matilde' },
            { src: '/assets/home/servizi/smash-cake/gallery/matilde/foto12.jpg', alt: 'Servizio smash cake Matilde' },
            { src: '/assets/home/servizi/smash-cake/gallery/matilde/foto13.jpg', alt: 'Servizio smash cake Matilde' }

          ]
        }
      ]
    },
    'famiglia': {
      banner: '/assets/home/servizi/famiglia/copertina.jpg',
      nome: 'Famiglia',
      photos: [
        { 
          src: '/assets/home/servizi/famiglia/gallery/antonio/foto14.jpg', 
          alt: 'Serviuzio famiglia Antonio', 
          nome: 'Antonio',
          detailedPhotos: [
            { src: '/assets/home/servizi/famiglia/gallery/antonio/foto1.jpg', alt: 'Servizio famiglia Antonio' },
            { src: '/assets/home/servizi/famiglia/gallery/antonio/foto2.jpg', alt: 'Servizio famiglia Antonio' },
            { src: '/assets/home/servizi/famiglia/gallery/antonio/foto3.jpg', alt: 'Servizio famiglia Antonio' },
            { src: '/assets/home/servizi/famiglia/gallery/antonio/foto4.jpg', alt: 'Servizio famiglia Antonio' },
            { src: '/assets/home/servizi/famiglia/gallery/antonio/foto5.jpg', alt: 'Servizio famiglia Antonio' },
            { src: '/assets/home/servizi/famiglia/gallery/antonio/foto6.jpg', alt: 'Servizio famiglia Antonio' },
            { src: '/assets/home/servizi/famiglia/gallery/antonio/foto7.jpg', alt: 'Servizio famiglia Antonio' },
            { src: '/assets/home/servizi/famiglia/gallery/antonio/foto8.jpg', alt: 'Servizio famiglia Antonio' },
            { src: '/assets/home/servizi/famiglia/gallery/antonio/foto9.jpg', alt: 'Servizio famiglia Antonio' },
            { src: '/assets/home/servizi/famiglia/gallery/antonio/foto10.jpg', alt: 'Servizio famiglia Antonio' },
            { src: '/assets/home/servizi/famiglia/gallery/antonio/foto11.jpg', alt: 'Servizio famiglia Antonio' },
            { src: '/assets/home/servizi/famiglia/gallery/antonio/foto12.jpg', alt: 'Servizio famiglia Antonio' },
            { src: '/assets/home/servizi/famiglia/gallery/antonio/foto13.jpg', alt: 'Servizio famiglia Antonio' },
            { src: '/assets/home/servizi/famiglia/gallery/antonio/foto14.jpg', alt: 'Servizio famiglia Antonio' },
            { src: '/assets/home/servizi/famiglia/gallery/antonio/foto15.jpg', alt: 'Servizio famiglia Antonio' }
          ]
        },
        { 
          src: '/assets/home/servizi/famiglia/gallery/elisa/foto14.jpg', 
          alt: 'Servizio famiglia Elisa', 
          nome: 'Elisa',
          detailedPhotos: [
            { src: '/assets/home/servizi/famiglia/gallery/elisa/foto1.jpg', alt: 'Servizio famiglia Elisa' },
            { src: '/assets/home/servizi/famiglia/gallery/elisa/foto2.jpg', alt: 'Servizio famiglia Elisa' },
            { src: '/assets/home/servizi/famiglia/gallery/elisa/foto3.jpg', alt: 'Servizio famiglia Elisa' },
            { src: '/assets/home/servizi/famiglia/gallery/elisa/foto4.jpg', alt: 'Servizio famiglia Elisa' },
            { src: '/assets/home/servizi/famiglia/gallery/elisa/foto5.jpg', alt: 'Servizio famiglia Elisa' },
            { src: '/assets/home/servizi/famiglia/gallery/elisa/foto6.jpg', alt: 'Servizio famiglia Elisa' },
            { src: '/assets/home/servizi/famiglia/gallery/elisa/foto7.jpg', alt: 'Servizio famiglia Elisa' },
            { src: '/assets/home/servizi/famiglia/gallery/elisa/foto8.jpg', alt: 'Servizio famiglia Elisa' },
            { src: '/assets/home/servizi/famiglia/gallery/elisa/foto9.jpg', alt: 'Servizio famiglia Elisa' },
            { src: '/assets/home/servizi/famiglia/gallery/elisa/foto10.jpg', alt: 'Servizio famiglia Elisa' },
            { src: '/assets/home/servizi/famiglia/gallery/elisa/foto11.jpg', alt: 'Servizio famiglia Elisa' },
            { src: '/assets/home/servizi/famiglia/gallery/elisa/foto12.jpg', alt: 'Servizio famiglia Elisa' },
            { src: '/assets/home/servizi/famiglia/gallery/elisa/foto13.jpg', alt: 'Servizio famiglia Elisa' },
            { src: '/assets/home/servizi/famiglia/gallery/elisa/foto14.jpg', alt: 'Servizio famiglia Elisa' },
            { src: '/assets/home/servizi/famiglia/gallery/elisa/foto15.jpg', alt: 'Servizio famiglia Elisa' },
            { src: '/assets/home/servizi/famiglia/gallery/elisa/foto16.jpg', alt: 'Servizio famiglia Elisa' },
            { src: '/assets/home/servizi/famiglia/gallery/elisa/foto17.jpg', alt: 'Servizio famiglia Elisa' },
            { src: '/assets/home/servizi/famiglia/gallery/elisa/foto18.jpg', alt: 'Servizio famiglia Elisa' },
            { src: '/assets/home/servizi/famiglia/gallery/elisa/foto19.jpg', alt: 'Servizio famiglia Elisa' },
            { src: '/assets/home/servizi/famiglia/gallery/elisa/foto20.jpg', alt: 'Servizio famiglia Elisa' },
            { src: '/assets/home/servizi/famiglia/gallery/elisa/foto21.jpg', alt: 'Servizio famiglia Elisa' }
        
          ]
        },
        { 
          src: '/assets/home/servizi/famiglia/gallery/samuel/foto7.jpg', 
          alt: 'Servizio famiglia Samuel', 
          nome: 'Samuel',
          detailedPhotos: [
            { src: '/assets/home/servizi/famiglia/gallery/samuel/foto1.jpg', alt: 'Servizio famiglia Samuel' },
            { src: '/assets/home/servizi/famiglia/gallery/samuel/foto2.jpg', alt: 'Servizio famiglia Samuel' },
            { src: '/assets/home/servizi/famiglia/gallery/samuel/foto3.jpg', alt: 'Servizio famiglia Samuel' },
            { src: '/assets/home/servizi/famiglia/gallery/samuel/foto4.jpg', alt: 'Servizio famiglia Samuel' },
            { src: '/assets/home/servizi/famiglia/gallery/samuel/foto5.jpg', alt: 'Servizio famiglia Samuel' },
            { src: '/assets/home/servizi/famiglia/gallery/samuel/foto6.jpg', alt: 'Servizio famiglia Samuel' },
            { src: '/assets/home/servizi/famiglia/gallery/samuel/foto7.jpg', alt: 'Servizio famiglia Samuel' },
            { src: '/assets/home/servizi/famiglia/gallery/samuel/foto8.jpg', alt: 'Servizio famiglia Samuel' },
            { src: '/assets/home/servizi/famiglia/gallery/samuel/foto9.jpg', alt: 'Servizio famiglia Samuel' },
            { src: '/assets/home/servizi/famiglia/gallery/samuel/foto10.jpg', alt: 'Servizio famiglia Samuel' },
            { src: '/assets/home/servizi/famiglia/gallery/samuel/foto11.jpg', alt: 'Servizio famiglia Samuel' }
        
          ]
        }
      ]
    },
    /* 'ritratto': {
      banner: '/assets/home/servizi/ritratto/copertina.jpg',
      nome: 'Ritratto',
      photos: [
        { 
          src: '/assets/home/servizi/ritratto/foto3.jpg', 
          alt: 'Ritratto primo piano', 
          nome: 'Michele',
          detailedPhotos: [
            { src: '/assets/home/servizi/ritratto/foto2.jpg', alt: 'Michele - Ritratto naturale' },
            { src: '/assets/home/servizi/ritratto/foto3.jpg', alt: 'Michele - Primo piano' },
            { src: '/assets/home/servizi/ritratto/foto3b.jpg', alt: 'Michele - Sorriso' },
            { src: '/assets/home/servizi/ritratto/foto3c.jpg', alt: 'Michele - Profilo' },
            { src: '/assets/home/servizi/ritratto/foto3d.jpg', alt: 'Michele - Dettagli' }
          ]
        },
        { 
          src: '/assets/home/servizi/ritratto/foto4.jpg', 
          alt: 'Ritratto in esterna', 
          nome: 'Andrea',
          detailedPhotos: [
            { src: '/assets/home/servizi/ritratto/foto4.jpg', alt: 'Andrea - In esterna' },
            { src: '/assets/home/servizi/ritratto/foto4b.jpg', alt: 'Andrea - Primo piano' },
            { src: '/assets/home/servizi/ritratto/foto4c.jpg', alt: 'Andrea - Profilo' },
            { src: '/assets/home/servizi/ritratto/foto4d.jpg', alt: 'Andrea - Natura' },
            { src: '/assets/home/servizi/ritratto/foto4e.jpg', alt: 'Andrea - Espressioni' }
          ]
        },
        { 
          src: '/assets/home/servizi/ritratto/foto5.jpg', 
          alt: 'Dettagli del volto', 
          nome: 'Davide',
          detailedPhotos: [
            { src: '/assets/home/servizi/ritratto/foto5.jpg', alt: 'Davide - Dettagli' },
            { src: '/assets/home/servizi/ritratto/foto5b.jpg', alt: 'Davide - Primo piano' },
            { src: '/assets/home/servizi/ritratto/foto5c.jpg', alt: 'Davide - Sorriso' },
            { src: '/assets/home/servizi/ritratto/foto5d.jpg', alt: 'Davide - Profilo' },
            { src: '/assets/home/servizi/ritratto/foto5e.jpg', alt: 'Davide - Studio' }
          ]
        }
      ]
    }, */
    'in-esterna': {
      banner: '/assets/home/servizi/esterna/copertina.jpg',
      nome: 'Servizi in Esterna',
      photos: [
        { 
          src: '/assets/home/servizi/esterna/gallery/matilde&tommaso/foto10.jpg', 
          alt: 'Servizio in esterna Matilde & Tommaso', 
          nome: 'Matilde & Tommaso',
          detailedPhotos: [
          { src: '/assets/home/servizi/esterna/gallery/matilde&tommaso/foto1.jpg', alt: 'Servizio in esterna Matilde & Tommaso' },
          { src: '/assets/home/servizi/esterna/gallery/matilde&tommaso/foto2.jpg', alt: 'Servizio in esterna Matilde & Tommaso' },
          { src: '/assets/home/servizi/esterna/gallery/matilde&tommaso/foto3.jpg', alt: 'Servizio in esterna Matilde & Tommaso' },
          { src: '/assets/home/servizi/esterna/gallery/matilde&tommaso/foto4.jpg', alt: 'Servizio in esterna Matilde & Tommaso' },
          { src: '/assets/home/servizi/esterna/gallery/matilde&tommaso/foto5.jpg', alt: 'Servizio in esterna Matilde & Tommaso' },
          { src: '/assets/home/servizi/esterna/gallery/matilde&tommaso/foto6.jpg', alt: 'Servizio in esterna Matilde & Tommaso' },
          { src: '/assets/home/servizi/esterna/gallery/matilde&tommaso/foto7.jpg', alt: 'Servizio in esterna Matilde & Tommaso' },
          { src: '/assets/home/servizi/esterna/gallery/matilde&tommaso/foto8.jpg', alt: 'Servizio in esterna Matilde & Tommaso' },
          { src: '/assets/home/servizi/esterna/gallery/matilde&tommaso/foto9.jpg', alt: 'Servizio in esterna Matilde & Tommaso' },
          { src: '/assets/home/servizi/esterna/gallery/matilde&tommaso/foto10.jpg', alt: 'Servizio in esterna Matilde & Tommaso' },
          { src: '/assets/home/servizi/esterna/gallery/matilde&tommaso/foto11.jpg', alt: 'Servizio in esterna Matilde & Tommaso' },
          { src: '/assets/home/servizi/esterna/gallery/matilde&tommaso/foto12.jpg', alt: 'Servizio in esterna Matilde & Tommaso' },
          { src: '/assets/home/servizi/esterna/gallery/matilde&tommaso/foto13.jpg', alt: 'Servizio in esterna Matilde & Tommaso' },
          { src: '/assets/home/servizi/esterna/gallery/matilde&tommaso/foto14.jpg', alt: 'Servizio in esterna Matilde & Tommaso' },
          { src: '/assets/home/servizi/esterna/gallery/matilde&tommaso/foto15.jpg', alt: 'Servizio in esterna Matilde & Tommaso' },
          { src: '/assets/home/servizi/esterna/gallery/matilde&tommaso/foto16.jpg', alt: 'Servizio in esterna Matilde & Tommaso' },
          { src: '/assets/home/servizi/esterna/gallery/matilde&tommaso/foto17.jpg', alt: 'Servizio in esterna Matilde & Tommaso' },
          { src: '/assets/home/servizi/esterna/gallery/matilde&tommaso/foto18.jpg', alt: 'Servizio in esterna Matilde & Tommaso' },
          { src: '/assets/home/servizi/esterna/gallery/matilde&tommaso/foto19.jpg', alt: 'Servizio in esterna Matilde & Tommaso' }
          ]
        },
      ]
    },
  };

  constructor() { }

  getGalleryInfo(servizio: string): ServiziGalleryInfo | null {
    return this.serviziFotograficiGallery[servizio] || null;
  }

  getGalleryPhotos(servizio: string): GalleryPhoto[] {
    const info = this.serviziFotograficiGallery[servizio];
    return info ? info.photos : [];
  }

  getServizioName(servizio: string): string {
    const info = this.serviziFotograficiGallery[servizio];
    return info ? info.nome : 'Gallery';
  }

  getBanner(servizio: string): string {
    const info = this.serviziFotograficiGallery[servizio];
    return info ? info.banner : '';
  }
}
