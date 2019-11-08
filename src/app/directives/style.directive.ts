import {Directive, ElementRef, Host, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  @Input('appStyle') color: string = 'blue';
  @Input() dStyles: {border?: string, fontWeight?: string, borderRadius?: string}

  @HostBinding('style.color') elColor = null;
  @HostBinding('style.fontWeight') elFWeight = null;
  @HostBinding('style.border') elBorder = null;
  @HostBinding('style.borderRadius') elRadius = null;
    constructor(private elRef: ElementRef , private  render: Renderer2) {

    }

    @HostListener('click', ['$event.target']) onClick(event: Event){
      console.log(event)
    }
    @HostListener('mouseenter') onEnter(){
      this.elColor = this.color;
      this.elFWeight = this.dStyles.fontWeight;
      this.elBorder = this.dStyles.border;
      this.elRadius = this.dStyles.borderRadius;
       // this.render.setStyle(this.elRef.nativeElement , 'color' , this.color);
       // this.render.setStyle(this.elRef.nativeElement , 'fontWeight' , this.dStyles.fontWeight);
       // this.render.setStyle(this.elRef.nativeElement , 'borderRadius' , this.dStyles.borderRadius);
       // this.render.setStyle(this.elRef.nativeElement , 'border' , this.dStyles.border);
    }

    @HostListener('mouseleave') onLeave(){
      this.elColor = null;
      this.elFWeight = null;
      this.elBorder = null;
      this.elRadius = null;
       // this.render.setStyle(this.elRef.nativeElement , 'color' , null);
       // this.render.setStyle(this.elRef.nativeElement , 'fontWeight' , null);
       // this.render.setStyle(this.elRef.nativeElement , 'borderRadius' , null);
       // this.render.setStyle(this.elRef.nativeElement , 'border' , null);
    }
}
