import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
  exports: [
    MenubarModule,
    ButtonModule,
    FieldsetModule,
    PanelModule,
    AccordionModule,
  ],
})
export class PrimeNgModule {}
