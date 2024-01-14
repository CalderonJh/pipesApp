import { NgModule } from '@angular/core';
import {ButtonModule} from "primeng/button";
import {MenubarModule} from "primeng/menubar";
import {CardModule} from "primeng/card";
import {FieldsetModule} from "primeng/fieldset";
import {PanelModule} from "primeng/panel";
import {AccordionModule} from "primeng/accordion";
import {AvatarModule} from "primeng/avatar";

@NgModule({
  exports:[
    MenubarModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    AccordionModule,
    AvatarModule
  ]
})
export class PrimeNgModule { }
