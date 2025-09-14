import { Routes } from '@angular/router';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },

      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home-page/home-page.component').then(
            (h) => h.HomePageComponent
          ),
        title: 'Coffee Menu',
      },

      {
        path: '**',
        loadComponent: () =>
          import('./components/notfound/notfound.component').then(
            (n) => n.NotfoundComponent
          ),
        title: 'Not Found!',
      },
    ],
  },
];
