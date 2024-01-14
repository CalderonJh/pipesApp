import { Component } from '@angular/core';

@Component({
  selector: 'pipes-number-panel',
  templateUrl: './number-panel.component.html',
  styles: '',
})
export class NumberPanelComponent {
  _number: number  = 2854398.255;
  _percent: number  = 0.332;
}
