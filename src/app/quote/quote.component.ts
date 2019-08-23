import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'I have no special talent. I am only passionately curious.', 'Albert Einstein'),
    new Quote(2,'Wisely, and slow. They stumble that run fast.','William Shakespeare '),
    new Quote(3,'The greatest wealth is to live content with little. ','Plato'),
    new Quote(4,'It always seems impossible until it’s done. ','Nelson Mandela'),

  ];


  constructor() { }

  ngOnInit() {
  }

}
