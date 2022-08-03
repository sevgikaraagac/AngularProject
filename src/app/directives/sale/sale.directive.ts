import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOnSale]'
})
export class SaleDirective implements OnInit {
  @Input() onSaleColor:string = 'yellow';
  @Input() onSaleText: string= 'On Sale';
  @Input() isOnSale : boolean=true;


  constructor(private elementRef:ElementRef, private renderer:Renderer2) {}

    ngOnInit(): void{
      if(!this.isOnSale) return;
      this.changeBackgroundColor("green");
      this.addSaleText();

    }

   @HostListener('mouseenter') onMouseEnter(){
    if(!this.isOnSale) return;
    this.changeBackgroundColor(this.onSaleColor)
   }

   @HostListener('mouseleave') onMouseLeave(){
    if(!this.isOnSale) return;
    this.changeBackgroundColor('green');
   }

   changeBackgroundColor(color:string){
    this.elementRef.nativeElement.style.backgroundColor=color
   }
   addSaleText(){
    const saleTextElement: HTMLElement = this.renderer.createElement('span');
    saleTextElement.innerText= this.onSaleText;
    //saleTextElement=<p>İndirim!!!</p>;
    this.renderer.appendChild(this.elementRef.nativeElement, saleTextElement)
   }


  }