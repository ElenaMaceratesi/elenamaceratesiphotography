import { Component } from '@angular/core';
import { SingleReviewComponent } from '../single-review/single-review.component';
import { NgForOf } from '@angular/common';
import { Review } from '../../../interface/home/review-interface';

@Component({
    selector: 'app-review',
    imports: [SingleReviewComponent, NgForOf],
    templateUrl: './review.component.html',
    standalone: true,
    styleUrl: './review.component.scss'
})
export class ReviewComponent {
    recensioni: Review[] = [
        {
            foto: 'assets/home/recensioni/recensione1.jpg',
            nome: 'Alessandra',
            recensione: `Elena è una FOTOGRAFA bravissima, paziente, professionale e molto dolce! Con lei abbiamo fatto 3 servizi fotografici ed ogni volta è una piacevolissima esperienza.
                         Le sue foto sono spontanee, dolci ed elegantissime.
                         Sicuramente non mancherà l’occasione di fare altri servizi fotografici con lei.
                         `,
            colore: '#f2eadc'
        },
        {
            foto: 'assets/home/recensioni/recensione2.jpg',
            nome: 'Andrea',
            recensione: `La passione e la pazienza di Elena sono le qualità che più la contraddistinguono. Con la nostra bambina è stata un angelo. Una dolcezza e una delicatezza infinita.... Consiglio tantissimo Elena come fotografa per qualsiasi book ma ancora di più per il "newborn" che mi sono resa conto essere davvero tanto impegnativo e lei è stata fantastica.... Grazie ancora Elena`,
            colore: '#fffaf6',
            reverse_direction: true
        },
        {
            foto: 'assets/home/recensioni/recensione3.jpg',
            nome: 'Roberta',
            recensione: `Elena non è solo una super professionista, ma è una persona dolcissima, sa come metterti a tuo agio ma sopratutto come coccolare e gestire il tuo piccolo neonato, mi sono da subito sentita sicura di affidarle il nostro piccolo. La sceglieremo sempre per i nostri servizi e consigliamo a tutti di fare altrettanto! I suoi scatti sono i nostri momenti di gioia. `,
            colore: '#f2eadc'
        },
        {
            foto: 'assets/home/recensioni/recensione4.jpg',
            nome: 'Melanie',
            recensione: `Elena è una vera professionista! Ama il suo lavoro e lo svolge con tanta passione! Abbiamo avuto il piacere di conoscerla con il servizio Maternity. La sua infinita dolcezza e disponibilità hanno permesso di sentirci a nostro agio sin dall’inizio.In ogni singolo scatto è riuscita a catturare tutte le emozioni del momento. È davvero raro incontrare una vera  professionista con tutte queste qualità, è un’artista della fotografia… Semplicemente STRAORDINARIA! `,
            colore: '#fffaf6',
            reverse_direction: true
        }
    ];
}
