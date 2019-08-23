import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})


export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1,'Albert Einstein','I have no special talent. I am only passionately curious.',new Date(2019,3,14)),
    new Quote(2,'William Shakespeare ','Wisely, and slow. They stumble that run fast.',new Date(2019,5,1)),
    new Quote(3,'Plato','The greatest wealth is to live content with little. ',new Date(2019,3,24)),
    new Quote(4,'Nelson Mandela','It always seems impossible until it’s done. ',new Date(2019,7,4)),

  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit() {
  }

}
