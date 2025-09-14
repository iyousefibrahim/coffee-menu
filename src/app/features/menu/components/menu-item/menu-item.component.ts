import { Coffee } from './../../interfaces/Coffee';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  imports: [],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
})
export class MenuItemComponent {
  coffeeItem = input.required<Coffee>();
  }
