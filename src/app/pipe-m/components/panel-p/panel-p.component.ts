import {Component, Input} from '@angular/core';

@Component({
  selector: 'pipes-panel-p',
  templateUrl: './panel-p.component.html',
  styles: '',
})
export class PanelPComponent {
  @Input()
  _var!: string | number;

  @Input()
  public _pipe!: string;
  @Input()
  public _length: boolean = false;
}
