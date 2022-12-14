import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngIfNot]'
})
export class IfNotDirective {
  @Input("ngIfNotElse") elseTemplateRef!:TemplateRef<any> 

  private hasView: boolean=false;

  constructor(private viewContainerRef: ViewContainerRef, 
    private templateRef:TemplateRef<any>) { }
    
    @Input() set ngIfNot(condition: boolean){
      if(condition===false && !this.hasView){
        this.viewContainerRef.clear();
        this.viewContainerRef.createEmbeddedView(this.templateRef);
        this.hasView=true;
      }else if(condition===false && this.hasView){
        this.viewContainerRef.clear();
        this.viewContainerRef.createEmbeddedView(this.elseTemplateRef);
        this.hasView=false;
      }
    }

}
