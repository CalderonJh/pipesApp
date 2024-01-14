import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-others-page',
  templateUrl: './others-page.component.html',
  styles: '',
})
export class OthersPageComponent {
  public characters = [
    {
      name: 'Bart',
      gender: 'male',
    },
    {
      name: 'Lisa',
      gender: 'female',
    },
  ];

  genderMap = {
    male: 'His',
    female: 'Her',
  };

  // i18nPlural
  simpsons = ['Homero', 'Marge', 'Bart', 'Lisa', 'Maggie'];

  public lengthMap = {
    '=0': 'There are no characters.',
    '=1': 'There is a character.',
    other: 'There are # characters.',
  };

  shift(): string | undefined {
    if (this.simpsons.length > 0) return this.simpsons.shift();
    else {
      this.simpsons = ['Homero', 'Marge', 'Bart', 'Lisa', 'Maggie'];
      return;
    }
  }

  // Async Pipe
  public observableTimer: Observable<number> = interval(1000);
}
