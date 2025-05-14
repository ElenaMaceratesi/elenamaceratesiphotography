import { Component } from '@angular/core';
import { SingleReviewComponent } from '../single-review/single-review.component';
import { NgForOf } from '@angular/common';

@Component({
    selector: 'app-review',
    imports: [SingleReviewComponent, NgForOf],
    templateUrl: './review.component.html',
    standalone: true,
    styleUrl: './review.component.scss'
})
export class ReviewComponent {
    recensioni = [
        {
            foto: 'assets/elena.jpg',
            nome: 'Alessandra',
            recensione: `Elena è una FOTOGRAFA bravissima, paziente, professionale e molto dolce! Con lei abbiamo fatto 3 servizi fotografici ed ogni volta è una piacevolissima esperienza.
                         Le sue foto sono spontanee, dolci ed elegantissime.
                         Sicuramente non mancherà l’occasione di fare altri servizi fotografici con lei.
                         `,
            colore: '#f2eadc'
        },
        {
            foto: 'assets/gallery4.png',
            nome: 'Andrea',
            recensione: `La passione e la pazienza di Elena sono le qualità che più la contraddistinguono. Con la nostra bambina è stata un angelo. Una dolcezza e una delicatezza infinita.... Consiglio tantissimo Elena come fotografa per qualsiasi book ma ancora di più per il "new born" che mi sono resa conto essere davvero tanto impegnativo e lei è stata fantastica.... Grazie ancora Elena`,
            colore: '#fffaf6'
        },
      {
        foto: 'assets/gallery5.png',
        nome: 'Roberta',
        recensione: `Elena non è solo una super professionista, ma è una persona dolcissima, sa come metterti a tuo agio ma sopratutto come coccolare e gestire il tuo piccolo neonato, mi sono da subito sentita sicura di affidarle il nostro piccolo  la sceglieremo sempre per i nostri servizi e consigliamo a tutti di fare altrettanto  i suoi scatti sono i nostri momenti di gioia `,
        colore: '#f2eadc'
      }
    ];
}
