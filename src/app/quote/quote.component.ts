import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})


export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1,'Albert Einstein','I have no special talent. I am only passionately curious.',"Ddi",new Date(2019,3,14)),
    // new Quote(2,'William Shakespeare ','Wisely, and slow. They stumble that run fast.',"Ddi",new Date(2019,5,1)),
    // new Quote(3,'Plato','The greatest wealth is to live content with little. ',"Ddi",new Date(2019,3,24)),
    new Quote(4,'Nelson Mandela','It always seems impossible until it’s done. ',"Ddi",new Date(2019,7,4)),

  ];

  toggleDetails(index){
    this.quotes[index].showName = !this.quotes[index].showName;
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

  addNewQuote(quote){``
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  // upVotes : number = 0;
  // downVotes : number = 0;

  // constructor() {
    
  //  }
  //  likeVote(){
  //   this.upVotes+=1;
  // }
  // dislikeVote(){
  //   this.downVotes+=1;
  // }

  // preNum:number;
  // lastNum:number;
  // counter:number;

  // highestUpvote(){
  //   this.preNum = 0
  //   this.lastNum = 0

  //   for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
  //     this.lastNum = this.quotes[this.counter].upVotes;
  //     if(this.lastNum > this.preNum){this.preNum = this.lastNum}
  //   }
  //   return  this.preNum
  // }

  ngOnInit() {
  }

}
