import { Component } from '@angular/core';

@Component({
  selector: 'pipes-date-panel',
  templateUrl: './date-panel.component.html',
  styleUrl: './date-panel.component.css'
})
export class DatePanelComponent {

  public date:Date = new Date()

}
