import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundPageComponent} from "./shared/pages/not-found-page/not-found-page.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pipe-m/pipe.module').then((m) => m.PipeModule),
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: "full",
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
