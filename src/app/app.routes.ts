import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/ciudades/ciudades').then(m => m.Ciudades)
    },
    {
        redirectTo: '',
        path: '**'
    }
];
