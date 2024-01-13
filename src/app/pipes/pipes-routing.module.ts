import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextPageComponent } from './pages/text-page/text-page.component';
import { DatePageComponent } from './pages/date-page/date-page.component';
import { NumberPageComponent } from './pages/number-page/number-page.component';
import { OthersPageComponent } from './pages/others-page/others-page.component';

const routes: Routes = [
  {
    path: 'text',
    component: TextPageComponent,
  },
  {
    path: 'date',
    component: DatePageComponent,
  },
  {
    path: 'number',
    component: NumberPageComponent,
  },
  {
    path: 'others',
    component: OthersPageComponent,
  },
  {
    path: '',
    component: TextPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
