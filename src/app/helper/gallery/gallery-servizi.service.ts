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
          src: '/assets/home/servizi/maternità/foto2.jpg', 
          alt: 'Coppia in esterna', 
          nome: 'Elena',
          detailedPhotos: [
            { src: '/assets/home/servizi/maternità/foto2.jpg', alt: 'Elena - Coppia in esterna' },
            { src: '/assets/home/servizi/maternità/foto2b.jpg', alt: 'Elena - Primo piano' },
            { src: '/assets/home/servizi/maternità/foto2c.jpg', alt: 'Elena - Dettagli' },
            { src: '/assets/home/servizi/maternità/foto2d.jpg', alt: 'Elena - Tramonto' },
            { src: '/assets/home/servizi/maternità/foto2e.jpg', alt: 'Elena - Momento intimo' }
          ]
        },
        { 
          src: '/assets/home/servizi/maternità/foto3.jpg', 
          alt: 'Coppia con cane', 
          nome: 'Marco',
          detailedPhotos: [
            { src: '/assets/home/servizi/maternità/foto3.jpg', alt: 'Marco - Coppia con cane' },
            { src: '/assets/home/servizi/maternità/foto3b.jpg', alt: 'Marco - Con cane' },
            { src: '/assets/home/servizi/maternità/foto3c.jpg', alt: 'Marco - Primo piano' },
            { src: '/assets/home/servizi/maternità/foto3d.jpg', alt: 'Marco - In esterna' },
            { src: '/assets/home/servizi/maternità/foto3e.jpg', alt: 'Marco - Dettagli' }
          ]
        },
        { 
          src: '/assets/home/servizi/maternità/foto4.jpg', 
          alt: 'Bacio alla pancia', 
          nome: 'Sofia',
          detailedPhotos: [
            { src: '/assets/home/servizi/maternità/foto4.jpg', alt: 'Sofia - Bacio alla pancia' },
            { src: '/assets/home/servizi/maternità/foto4b.jpg', alt: 'Sofia - Primo piano' },
            { src: '/assets/home/servizi/maternità/foto4c.jpg', alt: 'Sofia - Dettagli pancia' },
            { src: '/assets/home/servizi/maternità/foto4d.jpg', alt: 'Sofia - Coppia' },
            { src: '/assets/home/servizi/maternità/foto4e.jpg', alt: 'Sofia - Profilo' }
          ]
        }
      ]
    },
    'newborn': {
      banner: '/assets/home/servizi/newborn/copertina.jpg',
      nome: 'Newborn',
      photos: [
        { 
          src: '/assets/home/servizi/newborn/foto2.jpg', 
          alt: 'Neonato primo piano', 
          nome: 'Giulia',
          detailedPhotos: [
            { src: '/assets/home/servizi/newborn/foto2.jpg', alt: 'Giulia - Primo piano' },
            { src: '/assets/home/servizi/newborn/foto2b.jpg', alt: 'Giulia - Dormiente' },
            { src: '/assets/home/servizi/newborn/foto2c.jpg', alt: 'Giulia - Dettagli mani' },
            { src: '/assets/home/servizi/newborn/foto2d.jpg', alt: 'Giulia - Con mamma' },
            { src: '/assets/home/servizi/newborn/foto2e.jpg', alt: 'Giulia - Sorriso' }
          ]
        },
        { 
          src: '/assets/home/servizi/newborn/foto3.jpg', 
          alt: 'Dettagli neonato', 
          nome: 'Luca',
          detailedPhotos: [
            { src: '/assets/home/servizi/newborn/foto3.jpg', alt: 'Luca - Dettagli' },
            { src: '/assets/home/servizi/newborn/foto3b.jpg', alt: 'Luca - Primo piano' },
            { src: '/assets/home/servizi/newborn/foto3c.jpg', alt: 'Luca - Dormiente' },
            { src: '/assets/home/servizi/newborn/foto3d.jpg', alt: 'Luca - Con papà' },
            { src: '/assets/home/servizi/newborn/foto3e.jpg', alt: 'Luca - Espressioni' }
          ]
        },
        { 
          src: '/assets/home/servizi/newborn/foto4.jpg', 
          alt: 'Famiglia con neonato', 
          nome: 'Anna',
          detailedPhotos: [
            { src: '/assets/home/servizi/newborn/foto4.jpg', alt: 'Anna - Famiglia' },
            { src: '/assets/home/servizi/newborn/foto4b.jpg', alt: 'Anna - Con fratello' },
            { src: '/assets/home/servizi/newborn/foto4c.jpg', alt: 'Anna - Primo piano' },
            { src: '/assets/home/servizi/newborn/foto4d.jpg', alt: 'Anna - Dettagli' },
            { src: '/assets/home/servizi/newborn/foto4e.jpg', alt: 'Anna - Abbracci' }
          ]
        }
      ]
    },
    'primi-mesi': {
      banner: '/assets/home/servizi/primimesi/copertina.jpg',
      nome: 'Primi Mesi',
      photos: [
        { 
          src: '/assets/home/servizi/primimesi/foto2.jpg', 
          alt: 'Bambino sorridente', 
          nome: 'Emma',
          detailedPhotos: [
            { src: '/assets/home/servizi/primimesi/foto2.jpg', alt: 'Emma - Sorridente' },
            { src: '/assets/home/servizi/primimesi/foto2b.jpg', alt: 'Emma - Primo piano' },
            { src: '/assets/home/servizi/primimesi/foto2c.jpg', alt: 'Emma - Gioco' },
            { src: '/assets/home/servizi/primimesi/foto2d.jpg', alt: 'Emma - Con mamma' },
            { src: '/assets/home/servizi/primimesi/foto2e.jpg', alt: 'Emma - Dettagli' }
          ]
        },
        { 
          src: '/assets/home/servizi/primimesi/foto3.jpg', 
          alt: 'Momenti del bambino', 
          nome: 'Matteo',
          detailedPhotos: [
            { src: '/assets/home/servizi/primimesi/foto3.jpg', alt: 'Matteo - Momenti' },
            { src: '/assets/home/servizi/primimesi/foto3b.jpg', alt: 'Matteo - Primo piano' },
            { src: '/assets/home/servizi/primimesi/foto3c.jpg', alt: 'Matteo - Gioco' },
            { src: '/assets/home/servizi/primimesi/foto3d.jpg', alt: 'Matteo - Con papà' },
            { src: '/assets/home/servizi/primimesi/foto3e.jpg', alt: 'Matteo - Risate' }
          ]
        },
        { 
          src: '/assets/home/servizi/primimesi/foto4.jpg', 
          alt: 'Famiglia con bambino', 
          nome: 'Chiara',
          detailedPhotos: [
            { src: '/assets/home/servizi/primimesi/foto4.jpg', alt: 'Chiara - Famiglia' },
            { src: '/assets/home/servizi/primimesi/foto4b.jpg', alt: 'Chiara - Primo piano' },
            { src: '/assets/home/servizi/primimesi/foto4c.jpg', alt: 'Chiara - Con fratello' },
            { src: '/assets/home/servizi/primimesi/foto4d.jpg', alt: 'Chiara - Dettagli' },
            { src: '/assets/home/servizi/primimesi/foto4e.jpg', alt: 'Chiara - Espressioni' }
          ]
        }
      ]
    },
    'bebe': {
      banner: '/assets/home/servizi/bebe/copertina.jpg',
      nome: 'Bebè',
      photos: [
        { 
          src: '/assets/home/servizi/bebe/foto4.jpg', 
          alt: 'Bebè giocando', 
          nome: 'Giulia',
          detailedPhotos: [
            { src: '/assets/home/servizi/bebe/foto2.jpg', alt: 'Giulia - Primo piano' },
            { src: '/assets/home/servizi/bebe/foto3.jpg', alt: 'Giulia - Gioco' },
            { src: '/assets/home/servizi/bebe/foto4.jpg', alt: 'Giulia - Sorriso' },
            { src: '/assets/home/servizi/bebe/foto4b.jpg', alt: 'Giulia - Dettagli' },
            { src: '/assets/home/servizi/bebe/foto4c.jpg', alt: 'Giulia - Momenti' }
          ]
        },
        { 
          src: '/assets/home/servizi/bebe/foto5.jpg', 
          alt: 'Bebè con genitore', 
          nome: 'Federico',
          detailedPhotos: [
            { src: '/assets/home/servizi/bebe/foto5.jpg', alt: 'Federico - Con genitore' },
            { src: '/assets/home/servizi/bebe/foto5b.jpg', alt: 'Federico - Primo piano' },
            { src: '/assets/home/servizi/bebe/foto5c.jpg', alt: 'Federico - Abbracci' },
            { src: '/assets/home/servizi/bebe/foto5d.jpg', alt: 'Federico - Gioco' },
            { src: '/assets/home/servizi/bebe/foto5e.jpg', alt: 'Federico - Dettagli' }
          ]
        },
        { 
          src: '/assets/home/servizi/bebe/foto6.jpg', 
          alt: 'Momento della famiglia', 
          nome: 'Sara',
          detailedPhotos: [
            { src: '/assets/home/servizi/bebe/foto6.jpg', alt: 'Sara - Famiglia' },
            { src: '/assets/home/servizi/bebe/foto6b.jpg', alt: 'Sara - Con fratelli' },
            { src: '/assets/home/servizi/bebe/foto6c.jpg', alt: 'Sara - Primo piano' },
            { src: '/assets/home/servizi/bebe/foto6d.jpg', alt: 'Sara - Momenti' },
            { src: '/assets/home/servizi/bebe/foto6e.jpg', alt: 'Sara - Espressioni' }
          ]
        }
      ]
    },
    'smash-cake': {
      banner: '/assets/home/servizi/smash-cake/copertina.jpg',
      nome: 'Smash Cake',
      photos: [
        { 
          src: '/assets/home/servizi/smash-cake/foto2.jpg', 
          alt: 'Bambino con torta', 
          nome: 'Aurora',
          detailedPhotos: [
            { src: '/assets/home/servizi/smash-cake/foto2.jpg', alt: 'Aurora - Con torta' },
            { src: '/assets/home/servizi/smash-cake/foto2b.jpg', alt: 'Aurora - Primo piano' },
            { src: '/assets/home/servizi/smash-cake/foto2c.jpg', alt: 'Aurora - Mangia torta' },
            { src: '/assets/home/servizi/smash-cake/foto2d.jpg', alt: 'Aurora - Sporco' },
            { src: '/assets/home/servizi/smash-cake/foto2e.jpg', alt: 'Aurora - Felice' }
          ]
        },
        { 
          src: '/assets/home/servizi/smash-cake/foto3.jpg', 
          alt: 'Momento di gioco', 
          nome: 'Leonardo',
          detailedPhotos: [
            { src: '/assets/home/servizi/smash-cake/foto3.jpg', alt: 'Leonardo - Gioco' },
            { src: '/assets/home/servizi/smash-cake/foto3b.jpg', alt: 'Leonardo - Primo piano' },
            { src: '/assets/home/servizi/smash-cake/foto3c.jpg', alt: 'Leonardo - Risate' },
            { src: '/assets/home/servizi/smash-cake/foto3d.jpg', alt: 'Leonardo - Con torta' },
            { src: '/assets/home/servizi/smash-cake/foto3e.jpg', alt: 'Leonardo - Sporco' }
          ]
        },
        { 
          src: '/assets/home/servizi/smash-cake/foto4.jpg', 
          alt: 'Bambino sporco di torta', 
          nome: 'Valentina',
          detailedPhotos: [
            { src: '/assets/home/servizi/smash-cake/foto4.jpg', alt: 'Valentina - Sporco' },
            { src: '/assets/home/servizi/smash-cake/foto4b.jpg', alt: 'Valentina - Primo piano' },
            { src: '/assets/home/servizi/smash-cake/foto4c.jpg', alt: 'Valentina - Felice' },
            { src: '/assets/home/servizi/smash-cake/foto4d.jpg', alt: 'Valentina - Dettagli' },
            { src: '/assets/home/servizi/smash-cake/foto4e.jpg', alt: 'Valentina - Con torta' }
          ]
        }
      ]
    },
    'famiglia': {
      banner: '/assets/home/servizi/famiglia/copertina.jpg',
      nome: 'Famiglia',
      photos: [
        { 
          src: '/assets/home/servizi/famiglia/foto4.jpg', 
          alt: 'Famiglia insieme', 
          nome: 'Thomas',
          detailedPhotos: [
            { src: '/assets/home/servizi/famiglia/foto2.jpg', alt: 'Thomas - Famiglia in esterna' },
            { src: '/assets/home/servizi/famiglia/foto3.jpg', alt: 'Thomas - Momenti gioco' },
            { src: '/assets/home/servizi/famiglia/foto4.jpg', alt: 'Thomas - Famiglia insieme' },
            { src: '/assets/home/servizi/famiglia/foto4b.jpg', alt: 'Thomas - Primo piano' },
            { src: '/assets/home/servizi/famiglia/foto4c.jpg', alt: 'Thomas - Dettagli' }
          ]
        },
        { 
          src: '/assets/home/servizi/famiglia/foto5.jpg', 
          alt: 'Momento familiare', 
          nome: 'Riccardo',
          detailedPhotos: [
            { src: '/assets/home/servizi/famiglia/foto5.jpg', alt: 'Riccardo - Momento familiare' },
            { src: '/assets/home/servizi/famiglia/foto5b.jpg', alt: 'Riccardo - Primo piano' },
            { src: '/assets/home/servizi/famiglia/foto5c.jpg', alt: 'Riccardo - Con fratelli' },
            { src: '/assets/home/servizi/famiglia/foto5d.jpg', alt: 'Riccardo - Gioco' },
            { src: '/assets/home/servizi/famiglia/foto5e.jpg', alt: 'Riccardo - Espressioni' }
          ]
        },
        { 
          src: '/assets/home/servizi/famiglia/foto6.jpg', 
          alt: 'Abbraccio della famiglia', 
          nome: 'Alessio',
          detailedPhotos: [
            { src: '/assets/home/servizi/famiglia/foto6.jpg', alt: 'Alessio - Abbracci' },
            { src: '/assets/home/servizi/famiglia/foto6b.jpg', alt: 'Alessio - Primo piano' },
            { src: '/assets/home/servizi/famiglia/foto6c.jpg', alt: 'Alessio - Con genitori' },
            { src: '/assets/home/servizi/famiglia/foto6d.jpg', alt: 'Alessio - Momenti' },
            { src: '/assets/home/servizi/famiglia/foto6e.jpg', alt: 'Alessio - Dettagli' }
          ]
        }
      ]
    },
    'ritratto': {
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
    },
    'in-esterna': {
      banner: '/assets/home/servizi/esterna/copertina.jpg',
      nome: 'Servizi in Esterna',
      photos: [
        { 
          src: '/assets/home/servizi/esterna/foto2.jpg', 
          alt: 'Sessione esterna paesaggio', 
          nome: 'Giovanni',
          detailedPhotos: [
            { src: '/assets/home/servizi/esterna/foto2.jpg', alt: 'Giovanni - Paesaggio' },
            { src: '/assets/home/servizi/esterna/foto2b.jpg', alt: 'Giovanni - Natura' },
            { src: '/assets/home/servizi/esterna/foto2c.jpg', alt: 'Giovanni - Outdoor' },
            { src: '/assets/home/servizi/esterna/foto2d.jpg', alt: 'Giovanni - Luce naturale' },
            { src: '/assets/home/servizi/esterna/foto2e.jpg', alt: 'Giovanni - Dettagli' }
          ]
        },
        { 
          src: '/assets/home/servizi/esterna/foto3.jpg', 
          alt: 'Sessione esterna natura', 
          nome: 'Lorenzo',
          detailedPhotos: [
            { src: '/assets/home/servizi/esterna/foto3.jpg', alt: 'Lorenzo - Natura' },
            { src: '/assets/home/servizi/esterna/foto3b.jpg', alt: 'Lorenzo - Verde' },
            { src: '/assets/home/servizi/esterna/foto3c.jpg', alt: 'Lorenzo - Luce' },
            { src: '/assets/home/servizi/esterna/foto3d.jpg', alt: 'Lorenzo - Primo piano' },
            { src: '/assets/home/servizi/esterna/foto3e.jpg', alt: 'Lorenzo - Momenti' }
          ]
        },
        { 
          src: '/assets/home/servizi/esterna/foto4.jpg', 
          alt: 'Sessione esterna tramonto', 
          nome: 'Fabio',
          detailedPhotos: [
            { src: '/assets/home/servizi/esterna/foto4.jpg', alt: 'Fabio - Tramonto' },
            { src: '/assets/home/servizi/esterna/foto4b.jpg', alt: 'Fabio - Esterno' },
            { src: '/assets/home/servizi/esterna/foto4c.jpg', alt: 'Fabio - Natura' },
            { src: '/assets/home/servizi/esterna/foto4d.jpg', alt: 'Fabio - Luce dorata' },
            { src: '/assets/home/servizi/esterna/foto4e.jpg', alt: 'Fabio - Istantanea' }
          ]
        }
      ]
    },
    'mini-sessioni': {
      banner: '/assets/home/servizi/mini/copertina.jpg',
      nome: 'Mini Sessioni',
      photos: [
        { 
          src: '/assets/home/servizi/mini/foto4.jpg', 
          alt: 'Mini sessione momento 1', 
          nome: 'Simone',
          detailedPhotos: [
            { src: '/assets/home/servizi/mini/foto4.jpg', alt: 'Simone - Momento 1' },
            { src: '/assets/home/servizi/mini/foto4b.jpg', alt: 'Simone - Primo piano' },
            { src: '/assets/home/servizi/mini/foto4c.jpg', alt: 'Simone - Gioco' },
            { src: '/assets/home/servizi/mini/foto4d.jpg', alt: 'Simone - Momenti' },
            { src: '/assets/home/servizi/mini/foto4e.jpg', alt: 'Simone - Istantanea' }
          ]
        },
        { 
          src: '/assets/home/servizi/mini/foto5.jpg', 
          alt: 'Mini sessione momento 2', 
          nome: 'Gabriele',
          detailedPhotos: [
            { src: '/assets/home/servizi/mini/foto5.jpg', alt: 'Gabriele - Momento 2' },
            { src: '/assets/home/servizi/mini/foto5b.jpg', alt: 'Gabriele - Primo piano' },
            { src: '/assets/home/servizi/mini/foto5c.jpg', alt: 'Gabriele - Risate' },
            { src: '/assets/home/servizi/mini/foto5d.jpg', alt: 'Gabriele - Gioco' },
            { src: '/assets/home/servizi/mini/foto5e.jpg', alt: 'Gabriele - Dettagli' }
          ]
        },
        { 
          src: '/assets/home/servizi/mini/foto6.jpg', 
          alt: 'Mini sessione momento 3', 
          nome: 'Paolo',
          detailedPhotos: [
            { src: '/assets/home/servizi/mini/foto6.jpg', alt: 'Paolo - Momento 3' },
            { src: '/assets/home/servizi/mini/foto6b.jpg', alt: 'Paolo - Primo piano' },
            { src: '/assets/home/servizi/mini/foto6c.jpg', alt: 'Paolo - Momenti' },
            { src: '/assets/home/servizi/mini/foto6d.jpg', alt: 'Paolo - Gioco' },
            { src: '/assets/home/servizi/mini/foto6e.jpg', alt: 'Paolo - Espressioni' }
          ]
        }
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
