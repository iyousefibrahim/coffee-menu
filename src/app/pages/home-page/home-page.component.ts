import { Component } from '@angular/core';
import { MenuListComponent } from '../../features/menu/components/menu-list/menu-list.component';

@Component({
  selector: 'app-home-page',
  imports: [MenuListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  scrollToMenu() {
    const element = document.getElementById('menu');
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}
