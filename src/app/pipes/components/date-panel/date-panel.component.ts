import { Component } from '@angular/core';

@Component({
  selector: 'pipes-date-panel',
  templateUrl: './date-panel.component.html',
  styles: ''
})
export class DatePanelComponent {

  public date:Date = new Date()

}
