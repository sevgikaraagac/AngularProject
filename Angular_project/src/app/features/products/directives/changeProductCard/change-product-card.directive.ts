import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appChangeProductCard]'
})
export class ChangeProductCardDirective {
  @Input() opacityValue:number=1;

  constructor(private elementRef:ElementRef) { }

  @HostListener('click') onclick(){
    this.changeOpacity(this.opacityValue)
  }

  changeOpacity(opacity:number){
    this.elementRef.nativeElement.style.opacity=opacity
   }

   
}

