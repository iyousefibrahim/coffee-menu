import { MenuService } from './../../services/menu.service';
import {
  Component,
  OnInit,
  signal,
  WritableSignal,
  inject,
} from '@angular/core';
import { Coffee } from '../../interfaces/Coffee';
import { MenuSkeletonComponent } from '../menu-skeleton/menu-skeleton.component';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { ErrorComponent } from '../../../../components/error/error.component';
import { MenuEmptyComponent } from '../menu-empty/menu-empty.component';

@Component({
  selector: 'app-menu-list',
  imports: [
    MenuSkeletonComponent,
    MenuItemComponent,
    ErrorComponent,
    MenuEmptyComponent,
  ],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.scss',
})
export class MenuListComponent implements OnInit {
  coffeeItems: WritableSignal<Coffee[]> = signal([]);
  isLoading: WritableSignal<boolean> = signal(false);
  error: WritableSignal<string | null> = signal(null);

  private readonly _MenuService = inject(MenuService);

  getCoffeeItems() {
    this.isLoading.set(true);
    this.error.set(null);

    this._MenuService.getMenu().subscribe({
      next: (res) => {
        this.coffeeItems.set(res);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.isLoading.set(false);
        this.error.set(err);
      },
    });
  }

  ngOnInit(): void {
    this.getCoffeeItems();
  }
}
