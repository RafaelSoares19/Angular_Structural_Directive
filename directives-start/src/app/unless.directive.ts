import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  // @Input() set unless(condition: boolean){
    @Input() set appUnless(condition: boolean){
    if (!condition){
      this.vcRef.createEmbeddedView(this.templateREF);

    }else {
      this.vcRef.clear();

    }
  }

  constructor(private templateREF: TemplateRef<any> , private vcRef: ViewContainerRef ){ }

}
