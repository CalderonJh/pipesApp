import { Component } from '@angular/core';

@Component({
  selector: 'pipes-common-page',
  templateUrl: './common-page.component.html',
  styles: ''
})
export class CommonPageComponent {
  date: Date = new Date();
}
