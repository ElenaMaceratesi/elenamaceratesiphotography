import { Injectable } from '@angular/core';
import { ServizioFotografico } from '../../interface/servizi/Servizio-fotografico';

@Injectable({
  providedIn: 'root'
})
export class ServiziHelperService {

  private serviziFotografici: ServizioFotografico[] = [
    {
      foto: '/assets/home/servizi/maternita2.jpg',
      servizio: 'Maternità',
      descrizione: 'Tra le 28esima e la 34esima settimana di gravidanza'
    },
    {
      foto: '/assets/home/servizi/newborn2.jpg',
      servizio: 'Newborn',
      descrizione: 'Entro il primo mese di vita'
    },
    {
      foto: '/assets/home/servizi/primimesi.jpg',
      servizio: 'Primi mesi',
      descrizione: 'Da 1 a 5 mesi',
      path: '/primi-mesi'
    },
    {
      foto: '/assets/home/servizi/bebe.jpg',
      servizio: 'Bebè',
      descrizione: 'Da 6 agli 11 mesi'
    },
    {
      foto: '/assets/home/servizi/smashcake2.jpg',
      servizio: 'Smash cake',
      descrizione: 'Per festeggiare il primo compleanno'
    },
    {
      foto: '/assets/home/servizi/famiglia.jpg',
      servizio: 'Famiglia',
      descrizione: 'Da 1 anno in poi'
    },
    {
      foto: '/assets/home/servizi/esterna.jpg',
      servizio: 'Servizi in esterna'
    },
    {
      foto: '/assets/home/servizi/minisessioni.jpg',
      servizio: 'Mini sessioni'
    },
    {
      foto: '/assets/home/servizi/ritratto.jpg',
      servizio: 'Ritratto'
    }
  ];
  constructor() { }

  get elencoServiziFotografici(): ServizioFotografico[] {
    return this.serviziFotografici;
  }

}
