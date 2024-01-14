import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``,
})
export class MenuComponent implements OnInit {
  public items: MenuItem[] | undefined;

  ngOnInit(): void {
    console.log(Date())
    this.items = [
      {
        label: 'Common',
        icon: 'pi pi-shield',
        routerLink: 'common',
      },
      {
        label: 'Other',
        icon: 'pi pi-globe',
        routerLink: 'others',
      },
      {
        label: 'Custom',
        icon: 'pi pi-cog',
        routerLink: 'custom',
      },
    ];
  }
}
