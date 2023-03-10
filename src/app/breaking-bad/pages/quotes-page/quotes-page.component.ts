import { Component, OnInit } from '@angular/core';
import { BreakingBadService } from '../../services/breakingBad/breaking-bad.service';
import { Quote } from '../../interfaces/BreakingBad.interface';

@Component({
  selector: 'app-quotes-page',
  templateUrl: './quotes-page.component.html',
  styleUrls: ['./quotes-page.component.css']
})
export class QuotesPageComponent implements OnInit {

  quotes: Quote[] = [];
  constructor( private breakingBadService: BreakingBadService ) { }

  quote: number = 0;
  canNext: boolean = true;
  canPrev: boolean = false;

  currentQuote: Quote = {} as Quote;
  
  ngOnInit(): void {
    this.getQuotes();
  }

  getQuotes() {
    this.breakingBadService.getQuotes()
      .subscribe( data => {
        this.quotes = data;
        this.currentQuote = this.quotes?.[this.quote];
      });
  }

  onNext() {
    this.canNext = true;

    if ( !this.quotes?.[this.quote + 1] || this.quotes.length === this.quote ) {
      this.canNext = false;
      return;
    }
    this.canPrev = true;
    this.quote++;
    this.currentQuote = this.quotes?.[this.quote];
  }

  onPrev() {
    
    if ( !this.quotes?.[this.quote - 1]) {
      this.canPrev = false;
      this.canNext = true;
      return;
    }
    this.quote--;
    this.currentQuote = this.quotes?.[this.quote];

    this.canPrev = !(this.quote <= 0) ;
    this.canNext = true;
  }


}
