import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appWelcome]'
})
export class AppWelcomeDirective {
  @Input("appWelcomeElse") elseTemplate!:TemplateRef<any> 

  constructor(private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef) { }

    @Input() set appWelcome(ms:number) {
      this.viewContainerRef.createEmbeddedView(this.templateRef)
      setTimeout(()=>{
        this.viewContainerRef.clear();
        this.viewContainerRef.createEmbeddedView(this.elseTemplate)
      },ms)
        
    }


}