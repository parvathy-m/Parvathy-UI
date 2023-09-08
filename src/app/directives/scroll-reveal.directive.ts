import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]'
})
export class ScrollRevealDirective {

  element: HTMLElement;

  constructor(private eleRef: ElementRef)
  {
    this.element = this.eleRef.nativeElement
   }

  @HostListener('document:scroll', ['$event'])
  onScroll(e)
  {
    const windowHeight = window.innerHeight;
    const revealTop = this.element.getBoundingClientRect().top;
    const revalPoint = 150;

    if(revealTop < windowHeight - revalPoint)
    {
      this.element.classList.add("scroll-active");
    }
    else
    {
      this.element.classList.remove("scroll-active");
    }
  }

}
