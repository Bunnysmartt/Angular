import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangetheelement]'
})
export class ChangetheelementDirective {
element:ElementRef;
  constructor(private elem : ElementRef) {
    console.log(elem);
    elem.nativeElement.style.color = "white";
    elem.nativeElement.style.backgroundColor = "orange";
    elem.nativeElement.style.border = "2px solid black";
    //elem.nativeElement.innerHTML += "I am from Hyderabad,";
    this.element = elem;
   }

   ngOnInit(){
    this.element.nativeElement.innerHTML += ", I am from Hyderabad"
   }

}
