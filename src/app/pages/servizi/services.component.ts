import { Component } from '@angular/core';
import { ServiziHelperService } from '../../helper/servizi/servizi-helper.service';
import { ServizioFotografico } from '../../interface/servizi/Servizio-fotografico';
import { NgForOf, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-servizi',
    imports: [
        NgIf,
        NgForOf,
        RouterLink
    ],
    templateUrl: './services.component.html',
    styleUrl: './services.component.scss',
    standalone: true
})
export class ServicesComponent {
    elencoServizi: ServizioFotografico[] = [];

    constructor(serviziHelper: ServiziHelperService) {
      this.elencoServizi = serviziHelper.elencoServiziFotografici;
    }
}
