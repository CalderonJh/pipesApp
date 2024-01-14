import {Component, Input} from '@angular/core';

@Component({
  selector: 'pipes-text-p',
  templateUrl: './text-p.component.html',
  styleUrl: './text-p.component.css',
})
export class TextPComponent {
  @Input()
  public _pipe!: string;
}
