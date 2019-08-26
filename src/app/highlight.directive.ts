import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(elem:ElementRef){
    elem.nativeElement.style.backgroundColor='green';
  }
  // private backgroundColor(action:string){
  //   this.elem.nativeElement.style.backgroundColor=action;

  // }

}
