export class Quote {
  // public upVotes:number;
  // public downVotes:number;
 
    showName: boolean;
  constructor(public id: number,public name: string,public description: string,public sname:string, public completeDate: Date){
    this.showName=false;
    // this.upVotes = 0;
    // this.downVotes = 0;
  }
}
