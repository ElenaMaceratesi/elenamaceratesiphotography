import { Injectable } from '@angular/core';
import { ServizioFotografico } from '../../interface/servizi/Servizio-fotografico';

@Injectable({
  providedIn: 'root'
})
export class ServiziHelperService {

  private serviziFotografici: ServizioFotografico[] = [
    {
      foto: '/assets/home/servizi/maternita.jpg',
      servizio: 'Maternità',
      descrizione: 'Tra le 28esima e la 34esima settimana di gravidanza'
    },
    {
      foto: '/assets/home/servizi/newborn.jpg',
      servizio: 'Newborn',
      descrizione: 'Entro i primi mesi di vita'
    },
    {
      foto: '/assets/home/servizi/smashcake.jpg',
      servizio: 'Primi mesi',
      descrizione: 'Da 1 a 5 mesi'
    },
    {
      foto: '/assets/home/servizi/maternita.jpg',
      servizio: 'Bebè',
      descrizione: 'Da 6 agli 11 mesi'
    },
    {
      foto: '/assets/home/servizi/smashcake.jpg',
      servizio: 'Smash cake',
      descrizione: 'Per festeggiare il primo compleanno'
    },
    {
      foto: '/assets/home/servizi/newborn.jpg',
      servizio: 'Famiglia',
      descrizione: 'Da 1 anno in poi'
    },
    {
      foto: '/assets/home/servizi/maternita.jpg',
      servizio: 'Servizi in esterna'
    },
    {
      foto: '/assets/home/servizi/newborn.jpg',
      servizio: 'Ritratti'
    },
    {
      foto: '/assets/home/servizi/smashcake.jpg',
      servizio: 'Mini sessioni'
    }
  ];
  constructor() { }

  get elencoServiziFotografici(): ServizioFotografico[] {
    return this.serviziFotografici;
  }

}
