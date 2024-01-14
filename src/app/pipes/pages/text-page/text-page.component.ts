import { Component } from '@angular/core';

@Component({
  selector: 'pipes-text-page',
  templateUrl: './text-page.component.html',
  styleUrl: './text-page.component.css',
})
export class TextPageComponent {
  public text: string = 'This is a Text';
}
