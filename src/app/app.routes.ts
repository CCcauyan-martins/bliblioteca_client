import { Routes } from '@angular/router';
import { UsarBibliotecaRouteComponent } from './components/usar-biblioteca-route/usar-biblioteca-route.component';
import { SelecionaBibliotecaComponent } from './components/seleciona-biblioteca/seleciona-biblioteca.component';

export const routes: Routes = [
  { path: '', redirectTo: '/selecionaBiblioteca', pathMatch: 'full' },
  { path: 'selecionaBiblioteca', component: SelecionaBibliotecaComponent },
  { path: 'biblio/:biblioteca', component: UsarBibliotecaRouteComponent },
  { path: '**', redirectTo: '/selecionaBiblioteca' }
];
