import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent
{

  @Output() customEvent: EventEmitter<string> = new EventEmitter();

  // To trigger the event in the child component

  sectionReval(event: string): void
  {
    this.customEvent.emit(event);
  }

}
