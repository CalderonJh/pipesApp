import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OthersPageComponent } from './pages/others-page/others-page.component';
import { CommonPageComponent } from './pages/common-page/common-page.component';
import { CustomPageComponent } from './pages/custom-page/custom-page.component';
import { NotFoundPageComponent } from '../shared/pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: 'common',
    component: CommonPageComponent,
  },
  {
    path: 'others',
    component: OthersPageComponent,
  },
  {
    path: 'custom',
    component: CustomPageComponent,
  },
  {
    path: '',
    redirectTo: 'common',
    pathMatch:'full'
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
