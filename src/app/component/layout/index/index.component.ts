import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent
{
  @ViewChild('home', { static: true }) child1: ElementRef;
  @ViewChild('skills', { static: true }) child2: ElementRef;
  @ViewChild('about', { static: true }) child3: ElementRef;
  @ViewChild('project', { static: true }) child4: ElementRef;
  @ViewChild('contact', { static: true }) child5: ElementRef;
  @ViewChild('progress', { static: true }) child6: ElementRef;

  public handleEvent(componentId: string)
  {
    console.log(componentId);
    let childElement: ElementRef | undefined;

    switch (componentId)
    {
      case 'home':
        childElement = this.child1;
        break;
      case 'skills':
        childElement = this.child2;
        break;
      case 'about':
        childElement = this.child3;
        break;
      case 'progress':
        childElement = this.child6;
        break;
      case 'project':
        childElement = this.child4;
        break;
      case 'contact':
        childElement = this.child5;
        break;
      default:
        break;
    }

    // console.log(childElement.);


    const yOffset = childElement.nativeElement.getBoundingClientRect().top;
    console.log(yOffset);
    window.scrollTo({ top: yOffset, behavior: 'smooth' });
  }

}
