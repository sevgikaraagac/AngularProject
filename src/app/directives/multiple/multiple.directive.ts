import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMultiple]'
})
export class MultipleDirective {

  constructor(private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef) { }

    @Input() set appMultiple(index:number) {
      for (let i=0; i<index;i++) {
        this.viewContainerRef.createEmbeddedView(this.templateRef)   
      } 
    }

}
