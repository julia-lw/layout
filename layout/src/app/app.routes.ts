import { Routes } from '@angular/router';
import { Farmador } from './pages/farmador/farmador';
import { Moggador } from './pages/moggador/moggador';
import { Home } from './pages/home/home';

export const routes: Routes = [
    {path: 'farmador', component: Farmador},
    {path: 'moggador', component: Moggador},
    {path: '', component: Home},
];
