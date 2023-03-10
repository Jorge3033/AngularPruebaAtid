import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../../interfaces/BreakingBad.interface';

@Component({
  selector: 'app-card-breaking-bad-quotes',
  templateUrl: './card-breaking-bad-quotes.component.html',
  styleUrls: ['./card-breaking-bad-quotes.component.css']
})
export class CardBreakingBadQuotesComponent {

  @Input() quote!: Quote
  
  @Input() canNext: boolean = true;
  @Input() canPrev: boolean = true;

  @Output() onNext = new EventEmitter<any>();
  @Output() onPrev = new EventEmitter<any>();

  onPrevHandler() {
    this.onPrev.emit();
  }

  onNextHandler() {
    this.onNext.emit();
  }

}
