export class Quote {
 
    showName: boolean;
  constructor(public id: number,public name: string,public description: string,public sname:string, public completeDate: Date){
    this.showName=false;
  }
}
