import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  // preNum:number;
  // lastNum:number;
  // counter:number;

  // highestUpvote(){
  //   this.preNum = 0
  //   this.lastNum = 0

  //   for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
  //     this.lastNum = this.quotes[this.counter].upvotes;
  //     if(this.lastNum > this.preNum){this.preNum = this.lastNum}
  //   }
  //   return  this.preNum
  // }

  // votes
upVotes : number;
downVotes : number;
// vote = 0;
constructor() {
  this.upVotes = 0;
  this.downVotes = 0;
 }
 likeVote(){
   this.upVotes+=1;
 }
 dislikeVote(){
   this.downVotes+=1;
 }
 
  ngOnInit() {
  }

}
