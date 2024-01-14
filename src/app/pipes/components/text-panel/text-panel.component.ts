import { Component } from '@angular/core';

@Component({
  selector: 'pipes-text-panel',
  templateUrl: './text-panel.component.html',
  styleUrl: './text-panel.component.css',
})
export class TextPanelComponent {
  public text: string = 'This is a Text';
}
