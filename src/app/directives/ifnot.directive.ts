import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appIfnot]'
})
export class IfnotDirective {
  @Input('appIfnot') set ifNot(condition: boolean) {
    console.log(condition)
    if(!condition){
      // показати елементи
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      // очищає блок
      this.viewContainer.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) { }

}
