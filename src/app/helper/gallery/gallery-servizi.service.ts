import { Injectable } from '@angular/core';

export interface GalleryPhoto {
  src: string;
  alt: string;
}

@Injectable({
  providedIn: 'root'
})
export class GalleryServiziService {

  private serviziFotograficiGallery: { [key: string]: GalleryPhoto[] } = {
    'maternita': [
      { src: '/assets/home/servizi/maternità/foto2.jpg', alt: 'Coppia in esterna' },
      { src: '/assets/home/servizi/maternità/foto3.jpg', alt: 'Coppia con cane' },
      { src: '/assets/home/servizi/maternità/foto4.jpg', alt: 'Bacio alla pancia' }
    ],
    'newborn': [
      { src: '/assets/home/servizi/newborn/foto2.jpg', alt: 'Neonato primo piano' },
      { src: '/assets/home/servizi/newborn/foto3.jpg', alt: 'Dettagli neonato' },
      { src: '/assets/home/servizi/newborn/foto4.jpg', alt: 'Famiglia con neonato' }
    ],
    'primi-mesi': [
      { src: '/assets/home/servizi/primimesi/foto2.jpg', alt: 'Bambino sorridente' },
      { src: '/assets/home/servizi/primimesi/foto3.jpg', alt: 'Momenti del bambino' },
      { src: '/assets/home/servizi/primimesi/foto4.jpg', alt: 'Famiglia con bambino' }
    ],
    'bebe': [
      { src: '/assets/home/servizi/bebe/foto4.jpg', alt: 'Bebè giocando' },
      { src: '/assets/home/servizi/bebe/foto5.jpg', alt: 'Bebè con genitore' },
      { src: '/assets/home/servizi/bebe/foto6.jpg', alt: 'Momento della famiglia' }
    ],
    'smash-cake': [
      { src: '/assets/home/servizi/smash-cake/foto2.jpg', alt: 'Bambino con torta' },
      { src: '/assets/home/servizi/smash-cake/foto3.jpg', alt: 'Momento di gioco' },
      { src: '/assets/home/servizi/smash-cake/foto4.jpg', alt: 'Bambino sporco di torta' }
    ],
    'famiglia': [
      { src: '/assets/home/servizi/famiglia/foto4.jpg', alt: 'Famiglia insieme' },
      { src: '/assets/home/servizi/famiglia/foto5.jpg', alt: 'Momento familiare' },
      { src: '/assets/home/servizi/famiglia/foto6.jpg', alt: 'Abbraccio della famiglia' }
    ],
    'ritratto': [
      { src: '/assets/home/servizi/ritratto/foto3.jpg', alt: 'Ritratto primo piano' },
      { src: '/assets/home/servizi/ritratto/foto4.jpg', alt: 'Ritratto in esterna' },
      { src: '/assets/home/servizi/ritratto/foto5.jpg', alt: 'Dettagli del volto' }
    ],
    'in-esterna': [
      { src: '/assets/home/servizi/esterna/foto2.jpg', alt: 'Sessione esterna paesaggio' },
      { src: '/assets/home/servizi/esterna/foto3.jpg', alt: 'Sessione esterna natura' },
      { src: '/assets/home/servizi/esterna/foto4.jpg', alt: 'Sessione esterna tramonto' }
    ],
    'mini-sessioni': [
      { src: '/assets/home/servizi/mini/foto4.jpg', alt: 'Mini sessione momento 1' },
      { src: '/assets/home/servizi/mini/foto5.jpg', alt: 'Mini sessione momento 2' },
      { src: '/assets/home/servizi/mini/foto6.jpg', alt: 'Mini sessione momento 3' }
    ]
  };

  constructor() { }

  getGalleryPhotos(servizio: string): GalleryPhoto[] {
    return this.serviziFotograficiGallery[servizio] || [];
  }

  getServizioName(servizio: string): string {
    const nomi: { [key: string]: string } = {
      'maternita': 'Maternità',
      'newborn': 'Newborn',
      'primi-mesi': 'Primi Mesi',
      'bebe': 'Bebè',
      'smash-cake': 'Smash Cake',
      'famiglia': 'Famiglia',
      'ritratto': 'Ritratto',
      'in-esterna': 'Servizi in Esterna',
      'mini-sessioni': 'Mini Sessioni'
    };
    return nomi[servizio] || 'Gallery';
  }
}
