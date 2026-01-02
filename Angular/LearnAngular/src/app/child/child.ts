import { Component, output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  incrementCountEvent = output<number>();
  count = 0;

  onClick(){
    this.count ++;
    this.incrementCountEvent.emit(this.count);
  }
}
