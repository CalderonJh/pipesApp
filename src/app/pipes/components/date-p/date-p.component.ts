import {Component, Input} from '@angular/core';

@Component({
  selector: 'pipes-dates-p',
  templateUrl: './date-p.component.html',
  styleUrl: './date-p.component.css',
})
export class DatePComponent {
  @Input()
  _pipe!: string;
  date: Date = new Date();

}

