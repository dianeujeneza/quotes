import { Component, OnInit ,Input} from '@angular/core';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  @Input() quote: Quote;

  constructor() { }

  ngOnInit() {
  }

}
