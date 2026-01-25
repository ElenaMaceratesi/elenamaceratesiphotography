import { Injectable } from '@angular/core';

export interface GalleryPhoto {
  src: string;
  alt: string;
  nome?: string;
}

export interface ServiziGalleryInfo {
  photos: GalleryPhoto[];
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
        { src: '/assets/home/servizi/maternità/foto2.jpg', alt: 'Coppia in esterna', nome: 'Elena' },
        { src: '/assets/home/servizi/maternità/foto3.jpg', alt: 'Coppia con cane', nome: 'Marco' },
        { src: '/assets/home/servizi/maternità/foto4.jpg', alt: 'Bacio alla pancia', nome: 'Sofia' }
      ]
    },
    'newborn': {
      banner: '/assets/home/servizi/newborn/copertina.jpg',
      nome: 'Newborn',
      photos: [
        { src: '/assets/home/servizi/newborn/foto2.jpg', alt: 'Neonato primo piano', nome: 'Giulia' },
        { src: '/assets/home/servizi/newborn/foto3.jpg', alt: 'Dettagli neonato', nome: 'Luca' },
        { src: '/assets/home/servizi/newborn/foto4.jpg', alt: 'Famiglia con neonato', nome: 'Anna' }
      ]
    },
    'primi-mesi': {
      banner: '/assets/home/servizi/primimesi/copertina.jpg',
      nome: 'Primi Mesi',
      photos: [
        { src: '/assets/home/servizi/primimesi/foto2.jpg', alt: 'Bambino sorridente', nome: 'Emma' },
        { src: '/assets/home/servizi/primimesi/foto3.jpg', alt: 'Momenti del bambino', nome: 'Matteo' },
        { src: '/assets/home/servizi/primimesi/foto4.jpg', alt: 'Famiglia con bambino', nome: 'Chiara' }
      ]
    },
    'bebe': {
      banner: '/assets/home/servizi/bebe/copertina.jpg',
      nome: 'Bebè',
      photos: [
        { src: '/assets/home/servizi/bebe/foto4.jpg', alt: 'Bebè giocando', nome: 'Giulia' },
        { src: '/assets/home/servizi/bebe/foto5.jpg', alt: 'Bebè con genitore', nome: 'Federico' },
        { src: '/assets/home/servizi/bebe/foto6.jpg', alt: 'Momento della famiglia', nome: 'Sara' }
      ]
    },
    'smash-cake': {
      banner: '/assets/home/servizi/smash-cake/copertina.jpg',
      nome: 'Smash Cake',
      photos: [
        { src: '/assets/home/servizi/smash-cake/foto2.jpg', alt: 'Bambino con torta', nome: 'Aurora' },
        { src: '/assets/home/servizi/smash-cake/foto3.jpg', alt: 'Momento di gioco', nome: 'Leonardo' },
        { src: '/assets/home/servizi/smash-cake/foto4.jpg', alt: 'Bambino sporco di torta', nome: 'Valentina' }
      ]
    },
    'famiglia': {
      banner: '/assets/home/servizi/famiglia/copertina.jpg',
      nome: 'Famiglia',
      photos: [
        { src: '/assets/home/servizi/famiglia/foto4.jpg', alt: 'Famiglia insieme', nome: 'Thomas' },
        { src: '/assets/home/servizi/famiglia/foto5.jpg', alt: 'Momento familiare', nome: 'Riccardo' },
        { src: '/assets/home/servizi/famiglia/foto6.jpg', alt: 'Abbraccio della famiglia', nome: 'Alessio' }
      ]
    },
    'ritratto': {
      banner: '/assets/home/servizi/ritratto/copertina.jpg',
      nome: 'Ritratto',
      photos: [
        { src: '/assets/home/servizi/ritratto/foto3.jpg', alt: 'Ritratto primo piano', nome: 'Michele' },
        { src: '/assets/home/servizi/ritratto/foto4.jpg', alt: 'Ritratto in esterna', nome: 'Andrea' },
        { src: '/assets/home/servizi/ritratto/foto5.jpg', alt: 'Dettagli del volto', nome: 'Davide' }
      ]
    },
    'in-esterna': {
      banner: '/assets/home/servizi/esterna/copertina.jpg',
      nome: 'Servizi in Esterna',
      photos: [
        { src: '/assets/home/servizi/esterna/foto2.jpg', alt: 'Sessione esterna paesaggio', nome: 'Giovanni' },
        { src: '/assets/home/servizi/esterna/foto3.jpg', alt: 'Sessione esterna natura', nome: 'Lorenzo' },
        { src: '/assets/home/servizi/esterna/foto4.jpg', alt: 'Sessione esterna tramonto', nome: 'Fabio' }
      ]
    },
    'mini-sessioni': {
      banner: '/assets/home/servizi/mini/copertina.jpg',
      nome: 'Mini Sessioni',
      photos: [
        { src: '/assets/home/servizi/mini/foto4.jpg', alt: 'Mini sessione momento 1', nome: 'Simone' },
        { src: '/assets/home/servizi/mini/foto5.jpg', alt: 'Mini sessione momento 2', nome: 'Gabriele' },
        { src: '/assets/home/servizi/mini/foto6.jpg', alt: 'Mini sessione momento 3', nome: 'Paolo' }
      ]
    }
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
