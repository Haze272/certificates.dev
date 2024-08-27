import {Directive, HostBinding} from "@angular/core";

@Directive({
  selector: '[appHighlight]',
  standalone: true,
  host: {
    '(mouseenter)': 'onMouseOver()',
    '(mouseleave)': 'onMouseOut()'
  }
})
export class HighlightDirective {
  @HostBinding('class.highlight')
  highlight: boolean = false;

  // @HostListener('mouseover')
  onMouseOver(): void {
    this.highlight = true;
  }
  //
  // @HostListener('mouseout')
  onMouseOut(): void {
    this.highlight = false;
  }
}
