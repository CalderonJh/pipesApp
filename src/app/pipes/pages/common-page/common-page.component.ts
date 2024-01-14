import { Component } from '@angular/core';

@Component({
  selector: 'pipes-common-page',
  templateUrl: './common-page.component.html',
  styleUrl: './common-page.component.css'
})
export class CommonPageComponent {
  date: Date = new Date();

}
