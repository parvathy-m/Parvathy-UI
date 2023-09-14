import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent
{
  @Output() customEvent: EventEmitter<string> = new EventEmitter();

  // To trigger the event in the child component

  sectionReval(event: string): void
  {
    this.customEvent.emit(event);
  }

}
