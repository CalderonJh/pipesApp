import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import {PrimeNgModule} from "../prime-ng/prime-ng.module";
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';



@NgModule({
  declarations: [MenuComponent, NotFoundPageComponent],
  imports: [CommonModule, PrimeNgModule],
  exports: [MenuComponent, NotFoundPageComponent],
})
export class SharedModule {}
