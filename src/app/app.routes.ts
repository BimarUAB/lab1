import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { CrearProductoComponent } from './crear-producto/crear-producto';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        loadComponent: () => import('./home/home').then(m => m.Home)
      },
      {
        path: 'about',
        loadComponent: () => import('./about/about').then(m => m.About)
      },
     {
  path: 'crear-producto',
  loadComponent: () => import('./crear-producto/crear-producto').then(m => m.CrearProductoComponent)
}
    ]
  }
];