import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './pipes-routing.module';
import { TextPanelComponent } from './components/text-panel/text-panel.component';
import { DatePanelComponent } from './components/date-panel/date-panel.component';
import { NumberPanelComponent } from './components/number-panel/number-panel.component';
import { OthersPageComponent } from './pages/others-page/others-page.component';
import {PrimeNgModule} from "../prime-ng/prime-ng.module";
import { TextPComponent } from './components/text-p/text-p.component';
import { CommonPageComponent } from './pages/common-page/common-page.component';
import { CustomPageComponent } from './pages/custom-page/custom-page.component';


@NgModule({
  declarations: [
    TextPanelComponent,
    DatePanelComponent,
    NumberPanelComponent,
    OthersPageComponent,
    TextPComponent,
    CommonPageComponent,
    CustomPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule
  ]
})
export class PipesModule { }
