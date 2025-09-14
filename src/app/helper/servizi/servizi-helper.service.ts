import { Injectable } from '@angular/core';
import { ServizioFotografico } from '../../interface/servizi/Servizio-fotografico';

@Injectable({
  providedIn: 'root'
})
export class ServiziHelperService {

  private serviziFotografici: ServizioFotografico[] = [
    {
      foto: '/assets/servizi/elenco/maternita.jpg',
      servizio: 'Maternità',
      descrizione: 'Tra le 28esima e la 34esima settimana di gravidanza',
      path: '/maternita'
    },
    {
      foto: '/assets/servizi/elenco/newborn.jpg',
      servizio: 'Newborn',
      descrizione: 'Entro il primo mese di vita'
    },
    {
      foto: '/assets/servizi/elenco/primimesi.jpg',
      servizio: 'Primi mesi',
      descrizione: 'Da 1 a 5 mesi',
      path: '/primi-mesi'
    },
    {
      foto: '/assets/servizi/elenco/bebe.jpg',
      servizio: 'Bebè',
      descrizione: 'Da 6 agli 11 mesi',
      path: '/bebe'
    },
    {
      foto: '/assets/servizi/elenco/smashcake.jpg',
      servizio: 'Smash cake',
      descrizione: 'Per festeggiare il primo compleanno',
      path: '/smash-cake'
    },
    {
      foto: '/assets/servizi/elenco/famiglia.jpg',
      servizio: 'Famiglia',
      descrizione: 'Da 1 anno in poi',
      path: '/famiglia'
    },
    {
      foto: '/assets/servizi/elenco/esterna.jpg',
      servizio: 'Servizi in esterna',
      path: '/in-esterna'
    },
    {
      foto: '/assets/servizi/elenco/minisessioni.jpg',
      servizio: 'Mini sessioni',
      path: '/mini-sessioni'
    },
    {
      foto: '/assets/servizi/elenco/ritratto.jpg',
      servizio: 'Ritratto',
      path: '/ritratto'
    }
  ];
  constructor() { }

  get elencoServiziFotografici(): ServizioFotografico[] {
    return this.serviziFotografici;
  }

}
