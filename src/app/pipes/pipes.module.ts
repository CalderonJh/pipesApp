import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './pipes-routing.module';
import { TextPageComponent } from './pages/text-page/text-page.component';
import { DatePageComponent } from './pages/date-page/date-page.component';
import { NumberPageComponent } from './pages/number-page/number-page.component';
import { OthersPageComponent } from './pages/others-page/others-page.component';
import {PrimeNgModule} from "../prime-ng/prime-ng.module";
import { TextPComponent } from './components/text-p/text-p.component';


@NgModule({
  declarations: [
    TextPageComponent,
    DatePageComponent,
    NumberPageComponent,
    OthersPageComponent,
    TextPComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule
  ]
})
export class PipesModule { }
