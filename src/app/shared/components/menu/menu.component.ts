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
    this.items = [
      {
        label: 'Common',
        icon: 'pi pi-align-left',
        routerLink: 'text',
      },
      {
        label: 'Other',
        icon: 'pi pi-globe',
        routerLink: 'others',
      },
      {
        label: 'Custom',
        icon: 'pi pi-cog',
        routerLink: 'Custom',
      },
    ];
  }
}
