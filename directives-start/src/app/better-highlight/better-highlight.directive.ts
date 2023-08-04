
import { OnInit,Directive , ElementRef , Renderer2,HostListener, Input, HostBinding} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input()defaultColor: string = 'transparent';
  @Input('appBetterHighlight')hinghlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;


  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue' );
  }
  @HostListener('mouseenter') mouseover(eventData:Event){
    this.backgroundColor = this.hinghlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData:Event){
   this.backgroundColor = this.defaultColor;
  }
}
