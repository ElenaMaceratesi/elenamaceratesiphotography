import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-single-review',
  imports: [
    NgStyle
  ],
  templateUrl: './single-review.component.html',
  standalone: true,
  styleUrl: './single-review.component.scss'
})
export class SingleReviewComponent {
  @Input() foto!: string;
  @Input() nome!: string;
  @Input() testo!: string;
  @Input() backgroundColor: string = '#f2e7d5'; // colore neutro di default
}
